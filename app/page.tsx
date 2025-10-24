"use client";

import { Button, Card } from "react-shared-components";
// import 'react-shared-components/index.css';

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Card title="My Components Library">
          <div className="space-y-4">
            <p>Testing my shared components:</p>
            <div className="flex gap-3">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
