import { useModal } from '../../hooks/useModal';

import { MdKeyboardArrowUp } from 'react-icons/md';

import { Container } from './styles';

export function Filter() {
  const { status, toggleStatus } = useModal();

  return (
    <Container modalStatus={status}>
      <span>Filter by Region</span>
      <button type='button' onClick={toggleStatus}>
        <MdKeyboardArrowUp />
      </button>
    </Container>
  );
}
