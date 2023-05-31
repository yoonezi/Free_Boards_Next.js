import { gql } from "@apollo/client";

// boards/new에서 등록한 글 gql-query 로 가져오기 = fetch
export const FETCH_BOARD = gql`
  #변수 선언 부분(타입적는곳), fecthBoard는 boardsId라는 변수를 인자로 받고 이 변수는 ID는 타입
  query fetchBoard($boardId: ID!) {
    #실제로 쿼리를 실행하는 부분,
    # boardId는 필드의 인자로 전달되는 값이며, $boardId는 위에서 선언한 변수의 값을 참조합니다.
    # 이렇게 쿼리 내부에서 변수를 사용하여 값을 전달할 수 있습니다.
    fetchBoard(boardId: $boardId) {
      #실제 받을 변수 적는 곳
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;
