// Injects a JSON-LD <script> for structured data.
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Safe: data is first-party JSON-LD serialized with JSON.stringify, not raw HTML.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
