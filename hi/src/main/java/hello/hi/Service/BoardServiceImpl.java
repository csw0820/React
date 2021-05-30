package hello.hi.Service;

import hello.hi.DTO.BoardDTO;
import hello.hi.mapper.BoardMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service //미션 : Service가 두개일 때 어떻게 구현되는지 찾아보기
@RequiredArgsConstructor
 public class BoardServiceImpl implements BoardService{

    private final BoardMapper boardMapper; //생성자를 만들지 않고 변수로 주입(의존성 주입)

    @Override
    public List<BoardDTO> getBoardList() {

        return boardMapper.getBoardList();
    }
}
