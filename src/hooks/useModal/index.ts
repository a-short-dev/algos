import { createStore } from 'zustand';

type ModalName = 'sub' | 'deposit' | 'withdrawl';

interface ModalStore {
  modalName: <T = keyof ModalName>(modal: T) => T;
}

const useModalHook = createStore<ModalStore>();

export default useModalHook;
