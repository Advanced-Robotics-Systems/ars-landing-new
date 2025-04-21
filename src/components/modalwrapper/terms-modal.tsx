"use client";

import { termsandConditions as term } from "@/data";

import {
  Button,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

const TermsModal = ({
  name,
  extraStyles = "",
}: {
  name: string;
  extraStyles?: string;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Link onPress={onOpen} className={extraStyles}>
        {name}
      </Link>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        hideCloseButton
        scrollBehavior="inside"
        size="5xl"
        classNames={{ base: "bg-white rounded-lg shadow-lg" }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader></ModalHeader>
              <ModalBody className="relative">
                {/* Main Header */}
                <h2 className="text-xl font-medium text-ars-cyan mb-2">
                  {term.title}
                </h2>

                {term.sections.map((section, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-1">
                      {section.title}
                    </h3>

                    {section.introduction && (
                      <p className="text-sm text-gray-500 mb-4">
                        {section.introduction}
                      </p>
                    )}

                    <div className="space-y-4">
                      {section.subSections?.map((subSection, subIndex) => (
                        <div key={subIndex} className="mb-4">
                          <p className="text-sm text-ars-cyan font-medium mb-1">
                            {subSection.title}
                          </p>
                          {subSection.content.map((paragraph, pIndex) => (
                            <p
                              key={pIndex}
                              className="text-sm text-gray-700 mb-3"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </ModalBody>
              <ModalFooter>
                <Button
                  onPress={onClose}
                  className="text-white bg-ars-cyan hover:bg-sky-600 rounded transition-colors"
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default TermsModal;
