import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-indigo-50 font-sans text-gray-900">
      <header className="bg-indigo-700 text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-2">
            <span>📜</span> 법무사 이법무 사무소
          </h1>
          <nav className="space-x-6 hidden md:flex text-indigo-100 font-medium">
            <a href="#" className="hover:text-white transition">업무안내</a>
            <a href="#" className="hover:text-white transition">비용문의</a>
            <a href="#" className="hover:text-white transition">위치안내</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-indigo-900">정확한 법률 행정, 신속한 처리</h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">당신의 재산권 보호와 복잡한 법률 절차, 이법무 사무소가 함께합니다.</p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-3 px-10 rounded-lg text-lg shadow-lg transition duration-300">
              등기 상담 신청
            </button>
            <button className="bg-white hover:bg-gray-100 text-indigo-700 border-2 border-indigo-700 font-bold py-3 px-10 rounded-lg text-lg shadow-md transition duration-300">
              010-1234-5678
            </button>
          </div>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-indigo-700">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-bold mb-2 text-indigo-800">부동산 등기</h3>
            <p className="text-gray-600 text-sm">매매, 증여, 상속으로 인한 소유권 이전 및 근저당권 설정</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-indigo-700">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-bold mb-2 text-indigo-800">법인 등기</h3>
            <p className="text-gray-600 text-sm">법인 설립, 이사 변경, 증자 등 기업 경영에 필요한 모든 등기</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-indigo-700">
            <div className="text-4xl mb-4">⚖️</div>
            <h3 className="text-xl font-bold mb-2 text-indigo-800">개인회생/파산</h3>
            <p className="text-gray-600 text-sm">감당하기 힘든 채무, 법률적 절차를 통해 새 출발을 돕습니다.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-indigo-700">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-bold mb-2 text-indigo-800">민사/가사 서류</h3>
            <p className="text-gray-600 text-sm">소장, 답변서, 가압류, 가처분 신청 등 각종 서류 작성 대행</p>
          </div>
        </section>

        <section className="bg-white rounded-3xl p-10 shadow-xl border border-indigo-100">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-indigo-900">법무사 이법무의 약속</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 text-xl">✔</span>
                  <p className="text-gray-700 font-medium">모든 사건을 법무사가 직접 꼼꼼하게 검토합니다.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 text-xl">✔</span>
                  <p className="text-gray-700 font-medium">거품 없는 합리적인 법무 비용을 제시합니다.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 text-xl">✔</span>
                  <p className="text-gray-700 font-medium">고객의 비밀을 철저히 유지하며 안전하게 처리합니다.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 text-xl">✔</span>
                  <p className="text-gray-700 font-medium">진행 상황을 실시간으로 안내해 드립니다.</p>
                </li>
              </ul>
            </div>
            <div className="bg-indigo-50 p-8 rounded-2xl">
              <h4 className="text-xl font-bold mb-4 text-indigo-900">상담 시간 안내</h4>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>평일</span>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="flex justify-between border-t border-indigo-200 pt-2">
                  <span>점심시간</span>
                  <span>12:00 - 13:00</span>
                </div>
                <div className="flex justify-between border-t border-indigo-200 pt-2 text-red-500 font-bold">
                  <span>토/일/공휴일</span>
                  <span>휴무 (사전 예약시 가능)</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-indigo-900 text-white py-12 px-6 mt-16 text-center">
        <p className="mb-4 text-xl font-bold text-white">법무사 이법무 사무소</p>
        <p className="text-indigo-300 mb-2">경기도 수원시 영통구 법조로 45, 602호</p>
        <p className="text-indigo-300 mb-6">대표번호: 031-987-6543 | 팩스: 031-987-6544</p>
        <div className="w-16 h-1 bg-indigo-500 mx-auto mb-6"></div>
        <p className="text-indigo-400 text-xs">© 2026 Legal Scrivener Lee Office. All rights reserved.</p>
      </footer>
    </div>
  );
}
