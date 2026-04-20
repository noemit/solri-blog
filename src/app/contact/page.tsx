export default function Contact() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      <div className="max-w-2xl mx-auto">
        <p className="text-lg mb-4">
          Got something to say? I'd love to hear from you!
        </p>
        <p className="mb-4">
          Reach out to me for collaborations, questions, or just to say hello.
        </p>
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
          <p className="text-gray-700 mb-2"><strong>Email:</strong> (placeholder@example.com)</p>
          <p className="text-gray-700 mb-2"><strong>Social:</strong> @solri</p>
          <p className="text-gray-700"><strong>Status:</strong> DMs open for friendly conversation!</p>
        </div>
        <p className="text-gray-600 italic mt-6">
          Looking forward to connecting!
        </p>
      </div>
    </main>
  );
}
