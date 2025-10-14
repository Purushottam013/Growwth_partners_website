//   Trigger a Netlify deployment.
export async function triggerNetlifyBuild(): Promise<void> {
  const hookUrl = import.meta.env.VITE_REACT_APP_NETLIFY_BUILD_HOOK_URL;

  const response = await fetch(hookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(
      `Netlify build hook failed (status ${response.status}): ${text}`
    );
  }
}
