import React, { useCallback, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Icon,
  useMediaQuery,
} from "@chakra-ui/react";
import { GrClose } from "react-icons/gr";

import TitleText from "components/TitleText";
import { TRUE } from "sass";

interface HookUseModalProps {
  usingFooter?: boolean;
  usingCancelBtn?: boolean;
  usingSubmitBtn?: boolean;
  usingHeader?: boolean;
  modalBody?: any;
  positionTitle?: any;
  sizeModal?: string;
  closeText?: string;
  submitText?: string;
  handleSubmit?: (data?: any) => Promise<any>;
  handleClose?: () => void;
}

interface ModalState {
  isOpen?: boolean;
  title?: string;
  data?: any;
  redirectTo?: string;
  isDisabled?: boolean;
}

const useModal = ({
  usingFooter = true,
  usingCancelBtn = true,
  usingSubmitBtn = true,
  usingHeader = true,
  modalBody = () => <></>,
  positionTitle = "left",
  sizeModal = "md",
  closeText = "Close",
  submitText = "Submit",
  handleSubmit,
  handleClose,
}: HookUseModalProps) => {
  const ModalBodyComponent = modalBody;

  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    title: "",
    data: null,
    redirectTo: "",
    isDisabled: false,
  });

  const [checkMobileView] = useMediaQuery("(max-width: 48em)");

  const open = useCallback(
    ({ title = "", data, redirectTo = "" }: ModalState) => {
      setModalState((prevState) => ({
        ...prevState,
        isOpen: true,
        title,
        redirectTo,
        data,
      }));
    },
    []
  );

  const close = useCallback(() => {
    setModalState({
      isOpen: false,
      title: "",
      data: null,
      redirectTo: "",
    });
    handleClose?.();
  }, [handleClose]);

  const submit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();

      await handleSubmit?.(modalState?.data);
      close();
    },
    [close, handleSubmit, modalState?.data]
  );

  const Dialog = useCallback(
    (closeModal: any, props?: any) => (
      <Modal
        size={sizeModal}
        isOpen={modalState.isOpen || false}
        onClose={close}>
        <ModalOverlay />
        <ModalContent>
          {usingHeader && (
            <TitleText
              title={modalState.title}
              textAlign={positionTitle}
              maxWidth="90%"
              marginLeft="20px"
              marginTop="20px"
            />
          )}
          {checkMobileView ? (
            <Icon
              as={GrClose}
              fontSize="18px"
              position="absolute"
              top="20px"
              right="25px"
              onClick={close}
            />
          ) : (
            <ModalCloseButton cursor="pointer" fontSize="18px" top="20px" />
          )}
          <form onSubmit={submit}>
            <ModalBody py={8}>
              <ModalBodyComponent
                closeModal={closeModal}
                setModalState={setModalState}
                {...modalState}
                {...props}
              />
            </ModalBody>
            {usingFooter && (
              <ModalFooter>
                {usingCancelBtn && (
                  <Button
                    variant="outline"
                    mr={usingSubmitBtn ? 3 : 0}
                    onClick={close}
                    borderColor="linkedin.900">
                    {closeText}
                  </Button>
                )}
                {usingSubmitBtn && (
                  <Button
                    colorScheme="blue"
                    type="submit"
                    disabled={modalState?.isDisabled}>
                    {submitText}
                  </Button>
                )}
              </ModalFooter>
            )}
          </form>
        </ModalContent>
      </Modal>
    ),
    [
      sizeModal,
      modalState,
      close,
      usingHeader,
      positionTitle,
      checkMobileView,
      submit,
      ModalBodyComponent,
      usingFooter,
      usingCancelBtn,
      usingSubmitBtn,
      closeText,
      submitText,
    ]
  );

  return {
    open,
    close,
    Dialog,
  };
};

export default useModal;
