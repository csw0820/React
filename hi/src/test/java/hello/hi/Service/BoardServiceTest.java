package hello.hi.Service;

import hello.hi.DTO.BoardDTO;
import hello.hi.mapper.BoardMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest
@Transactional
@Rollback(value = false)
class BoardServiceTest {

    @Autowired
    BoardMapper boardMapper;

    @Test
    void selectTest() {
        List<BoardDTO> boardDto = boardMapper.getBoardList();
        for (BoardDTO boardDtos : boardDto) {
            System.out.println("boardDto = " + boardDtos);
        }

    }
}