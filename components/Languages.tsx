import Image from "next/image";

const languages = [
  { name: "C", years: 3, level: 1, icon: "/icons/c.svg", description: "大学の授業で学習<br/>その後C言語プログラミング能力認定試験1級に合格" },
  { name: "C++", years: 1.5, level: 2, icon: "/icons/c++.svg", description: "AtCoderで使用" },
  { name: "C#", years: 0.5, level: 2, icon: "/icons/cs.svg", description: "ゲーム制作で使用" },
  { name: "Java", years: 0.5, level: 2, icon: "/icons/java.svg", description: "長期インターンシップでのバックエンド開発経験<br/>その後IoT開発で使用" },
  { name: "JavaScript", years: 0.5, level: 1, icon: "/icons/javascript.svg", description: "Vue, Nextを勉強中" },
  { name: "Python", years: 3, level: 2, icon: "/icons/python.svg", description: "大学の授業で学習<br/>Web開発でFlaskを使用した経験" },
  { name: "Ruby", years: 0.1, level: 1, icon: "/icons/ruby.svg", description: "paizaラーニングで基礎を学習<br/>Railsもpaizaで学習" },
];

const getStars = (level: number) => "⭐".repeat(level) + "☆".repeat(3 - level);
const formatYears = (years: number) => (years % 1 === 0 ? years : years.toFixed(1));

export default function Languages() {
  return (
    <section className="bg-white p-6">
      <h3 className="text-lg font-semibold text-green-500 text-center">SKILLS</h3>
      <h2 className="text-2xl font-bold mt-1 mb-6 text-center">Areas of Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {languages.map((lang) => (
          <div
            key={lang.name}
            className="flex items-center p-4 rounded-lg shadow-md"
          >
            <div className="flex items-center w-2/5">
              <Image src={lang.icon} alt={lang.name} width={40} height={40} />
              <div className="ml-3">
                <h4 className="text-lg font-semibold">{lang.name}</h4>
                <p className="text-gray-600">{formatYears(lang.years)} years</p>
                <p className="text-yellow-500">{getStars(lang.level)}</p>
              </div>
            </div>
            
            <div className="ml-2 w-3/5 text-left">
              <p className="text-gray-500 text-sm" dangerouslySetInnerHTML={{ __html: lang.description }}></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
