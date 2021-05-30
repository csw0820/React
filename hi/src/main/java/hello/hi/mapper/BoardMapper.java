package hello.hi.mapper;

import hello.hi.DTO.BoardDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

//xml을 실행시켜주는 역활
@Mapper //마이바티스 어노테이션(DAO를 가져오는 역활을 자동으로 처리해준다)
public interface BoardMapper {

    //읽기
    List<BoardDTO> getBoardList();
    //자세히읽기
    BoardDTO   fileDetail(int no);
    //삽입하기
    int fileBoardInsert(BoardDTO boardDTO);
    //수정하기
    int fileBoardUpdate(BoardDTO boardDTO);
    //삭제하기
    int fileDelite(int no);

}
