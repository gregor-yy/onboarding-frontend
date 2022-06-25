const showToast = ({ toast, title, desc, status }) => {
  toast({
    title: title,
    description: desc,
    status: status,
    duration: 3000,
    isClosable: true,
  });
};
export default showToast;
