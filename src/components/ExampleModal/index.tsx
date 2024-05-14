import { Stack } from '@mui/material';
import { closeModal, showModal } from '../ModalWrapping';

export const ExampleModal = () => {
  return (
    <>
      <h2>Render testing</h2>
      <button
        onClick={() =>
          showModal(
            <Stack p={2} gap={1}>
              <h1>New rendering</h1>
              <button onClick={closeModal}>Close modal</button>
            </Stack>
          )
        }
      >
        Open modal
      </button>
    </>
  );
};
