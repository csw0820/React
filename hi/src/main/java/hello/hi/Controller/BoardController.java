package hello.hi.Controller;


import hello.hi.DTO.BoardDTO;
import hello.hi.Service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

//@RestController //형식이 있는데이터를 가지고 올때? restApi설계할때
@Controller
@RequestMapping("/board")
@RequiredArgsConstructor //FINAL을 생성자로 만들어 주는것
public class BoardController {

    private final BoardService boardService;

    @GetMapping({"/", ""})
    public String getBoardList(Model model) {//파라미터에 모델을 넣어줘야 담을 바구니가 생긴다
        List<BoardDTO> bList = new ArrayList<>();

       bList =  boardService.getBoardList();

        model.addAttribute("result",bList);

        return "board/board"; //경로 반환
    }

    @GetMapping("/detail/{no}")
    public String getDetail(@PathVariable("no") int no, Model model) {
        return "board/update";

    }

    @GetMapping("/update")
    public String getUpdate(@PathVariable("no") int no, Model model) {

        return "board/update";
    }

    @PostMapping("/update")
    public String postUpdate() {

        // boardservice.삭제(id);

        return "redirect:/board";
    }



}
