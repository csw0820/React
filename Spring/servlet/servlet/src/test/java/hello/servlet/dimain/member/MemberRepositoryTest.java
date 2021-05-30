package hello.servlet.dimain.member;

import hello.servlet.domain.member.Member;
import hello.servlet.domain.member.MemberRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.*;

class MemberRepositoryTest {
    MemberRepository memberRepository = MemberRepository.getInstance();

    @AfterEach
    void afterEach() {
        memberRepository.clearStore();
    }
    @Test
    void save() {
        //given
        Member member = new Member("hello", 20);
        //when //이런걸 실행했을 때
        Member savemember = memberRepository.save(member);
        //then
        Member findMember = memberRepository.findbyId(savemember.getId());
        assertThat(findMember).isEqualTo(savemember);
    }

    @Test
    void findAll() {
        //given
        Member member1 = new Member("member1",20);
        Member member2 = new Member("member2",20);

        memberRepository.save(member1);
        memberRepository.save(member2);

        List<Member> result = memberRepository.findAll();

        assertThat(result.size()).isEqualTo(2);
        assertThat(result).contains(member1,member2);

    }



}
