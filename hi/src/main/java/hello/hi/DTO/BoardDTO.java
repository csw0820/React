package hello.hi.DTO;

import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BoardDTO {

    private int no;
    private String writer;
    private String title;
    private String contents;
    private String regDate;



}
