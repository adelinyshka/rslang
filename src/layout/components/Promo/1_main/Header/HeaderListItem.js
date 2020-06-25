import styled from 'styled-components';

const HeaderListItem = styled.li`
  list-style-type: none;
  width: fit-content;
  padding: 17px;
  
    @media(max-width: 1035px) and (min-width: 991px) {
      padding: 10px;
  }
  
  @media(max-width: 990px) {
      padding: 10px 0;
  }
`;

export default HeaderListItem;
