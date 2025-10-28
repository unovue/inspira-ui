import { createSharedComposable } from "@vueuse/core";

function _useCopyToClipboard(text: string) {
  const toast = useToast();

  navigator.clipboard.writeText(text).then(() => {
    toast.add({
      title: "Success!",
      description: "Successfully copied to clipboard.",
      color: "success",
    });
  });
}

export const useCopyToClipboard = createSharedComposable(_useCopyToClipboard);
