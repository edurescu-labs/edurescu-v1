export default function AssistantPage() {
  return (
    <div className="flex items-center justify-center h-full p-8">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">AI Assistant</h1>
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="mb-4">
            <svg
              className="mx-auto h-16 w-16 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </div>
          <p className="text-xl text-gray-600">Chat coming soon</p>
          <p className="text-sm text-gray-500 mt-2">
            Your 24/7 academic emergency assistant will be available here
          </p>
        </div>
      </div>
    </div>
  );
}
