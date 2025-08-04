'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSave = async () => {
    if (!content.trim()) {
      alert('Please enter some content before saving');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/paste', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });

      if (response.ok) {
        const { id } = await response.json();
        router.push(`/p/${id}`);
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error('Error saving paste:', error);
      alert('Failed to save paste');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      e.preventDefault();
      handleSave();
    }
  };

  return (
    <main className="w-full h-screen flex flex-col">
      <div className="flex-1 p-4">
        <Textarea 
          className="h-full resize-none"
          placeholder="Enter your text here... (Ctrl+S to save)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="p-4  w-fit">
        <Button 
          onClick={handleSave} 
          disabled={isLoading || !content.trim()}
          className="w-full"
        >
          {isLoading ? 'Saving...' : 'Save Paste'}
        </Button>
      </div>
    </main>
  );
}