import { gql, useQuery } from "@apollo/client";
import {
  Avatar,
  AvatarWrapper,
  Body,
  BottomWrapper,
  Button,
  CardWrapper,
  Contents,
  CreatedAt,
  Header,
  Info,
  Title,
  Wrapper,
  Writer,
} from "../../../styles/boardsDetail";
import { useRouter } from "next/router";

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
      content
      createdAt
    }
  }
`;

export default function BoardDetailPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  return (
    <Wrapper>
      <CardWrapper>
        <Header>
          <AvatarWrapper>
            <Avatar src="/images/avatar.png" />
            <Info>
              {/* data 객체가 존재하고, fetchBoard 필드가 존재하며, 그 안에 writer 필드가 존재할 경우 해당 값을 반환합니다.
             만약 중간에 어떤 필드가 존재하지 않는다면, undefined를 반환합니다. */}
              <Writer>{data?.fetchBoard?.writer}</Writer>
              <CreatedAt>{data?.fetchBoard?.createdAt}</CreatedAt>
            </Info>
          </AvatarWrapper>
        </Header>
        <Body>
          <Title>{data?.fetchBoard?.title}</Title>
          <Contents>{data?.fetchBoard?.contents}</Contents>
        </Body>
      </CardWrapper>
      <BottomWrapper>
        <Button>목록으로</Button>
        <Button>수정하기</Button>
        <Button>삭제하기</Button>
      </BottomWrapper>
    </Wrapper>
  );
}
