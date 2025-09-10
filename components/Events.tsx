export default function Events() {
  const steps = [
    { num: "ステップ1", title: "テキスト", text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト" },
    { num: "ステップ2", title: "テキスト", text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト" },
    { num: "ステップ3", title: "テキスト", text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト" },
  ];

  return (
    <section className="bg-white p-6">
      <h3 className="text-lg font-semibold text-green-500 text-center">
        EVENTS
      </h3>
      <h2 className="text-2xl font-bold mt-1 mb-6 text-center">
        History of Participation
      </h2>
    </section>
  );
}
