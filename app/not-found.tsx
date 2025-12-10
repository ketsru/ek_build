
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Page introuvable</h1>
      <p className="text-gray-500 mb-6">
        Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
      </p>

      <a
        href="/"
        className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
      >
        Retour à l'accueil
      </a>
    </div>
  );
}
