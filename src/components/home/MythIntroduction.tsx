export default function MythIntroduction() {
  return (
    <section className="bg-[#eeeae3] px-8 py-32 md:px-16 md:py-48">
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <p className="text-xs tracking-[0.3em] text-black/50">
            THE EXHIBITION
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-light leading-tight tracking-tight md:text-6xl">
            EVERY STORY
            <br />
            LEAVES A TRACE.
          </h2>

          <p className="mt-10 max-w-xl text-base leading-8 text-black/60">
            그리스·로마 신화는 하나의 이야기로 끝나지 않습니다.
            수천 년 동안 수많은 예술가들이 같은 신화와 사건을
            서로 다른 방식으로 표현해 왔습니다.
          </p>

          <div className="mt-16 flex max-w-xl flex-wrap items-center gap-x-4 gap-y-3 text-sm tracking-[0.12em]">
            <span>MYTH</span>
            <span className="text-black/30">→</span>
            <span>STORY</span>
            <span className="text-black/30">→</span>
            <span>EVENT</span>
            <span className="text-black/30">→</span>
            <span>CHARACTER</span>
            <span className="text-black/30">→</span>
            <span>ARTWORK</span>
          </div>
        </div>
      </div>
    </section>
  );
}