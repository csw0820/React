package hello.servlet.domain.member;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MemberRepository {

    private Map<Long, Member> store = new HashMap<>();
    private static long sequence = 0L; //아이디가 증가

    private static final MemberRepository instance = new MemberRepository();

    public static MemberRepository getInstance() {
        return instance;
    }
    private MemberRepository(){ //생성자로 다른사람이 생성하지 못하도록 막는다

    }

    public Member save(Member member) {
        member.setId(++sequence);
        store.put(member.getId(), member);
        return member;
    }

    public Member findbyId(Long id) {
        return store.get(id);
    }

    public List<Member> findAll() {
        return new ArrayList<>(store .values());
    }

    public void clearStore() {
        store.clear();
    }

}
