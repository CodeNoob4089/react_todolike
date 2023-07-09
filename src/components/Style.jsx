import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #c4a4eb;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;
export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputField = styled.input`
  width: 70%;
  padding: 8px;
  margin-bottom: 10px;
`;

export const TodoCard = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 200px; /* 고정된 너비 설정 */
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  overflow: hidden; /* 내용이 너비를 초과하는 경우 숨김 처리 */
  text-overflow: ellipsis; /* 내용이 너비를 초과하는 경우 말줄임표(...) 표시 */
`;
