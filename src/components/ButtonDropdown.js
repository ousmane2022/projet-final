import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function ButtonDropdown() {
  return (
    <DropdownButton id="dropdown-item-button" title="Dropdown button">
      <Dropdown.ItemText>OrangeMoney</Dropdown.ItemText>
      <Dropdown.Item as="button">WaveMoney</Dropdown.Item>
      <Dropdown.Item as="button">FreeMoney</Dropdown.Item>
      <Dropdown.Item as="button">E.Money</Dropdown.Item>
    </DropdownButton>
  );
}

export default ButtonDropdown;