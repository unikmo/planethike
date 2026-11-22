'use client';

import { useState } from 'react';
import { ArrowRight, Check, Copy } from 'lucide-react';
import { trackEvent } from './analytics';

const choices = [
  { id: 'sensible', label: 'Different colours. Same style.', verdict: 'Suspiciously sensible.', note: 'A respectable first offence. The Shoe Police are watching.' },
  { id: 'wild', label: 'Two entirely different shoes.', verdict: 'Management has been notified.', note: 'Nobody asked you to coordinate. You understood the assignment.' },
  { id: 'legend', label: 'One for work. One for a music festival.', verdict: 'Your shoes are no longer speaking.', note: 'An irreconcilable difference. A spectacular result.' },
] as const;

type ChoiceId = typeof choices[number]['id'];

export default function ShoeChallenge() {
  const [choice, setChoice] = useState<ChoiceId>('wild');
  const [copied, setCopied] = useState(false);
  const selected = choices.find((item) => item.id === choice) ?? choices[1];

  async function copyChallenge() {
    const challenge = `The Shoe Police assessed my PlanetHike mismatch: ${selected.verdict} Two different shoes. 10,000 steps. Zero normal. Show me yours: https://planethike.org/#shoe-challenge`;
    try {
      await navigator.clipboard.writeText(challenge);
      setCopied(true);
      trackEvent('shoe_challenge_share', { verdict: choice, method: 'copy' });
    } catch {
      // The optional share interaction does not block joining the walk.
      setCopied(false);
    }
  }

  return (
    <div className="luxChallenge" id="shoe-challenge">
      <div className="luxChallengeIntro">
        <p className="luxEyebrow">THE SHOE POLICE · FIELD INSPECTION 001</p>
        <h2>How chaotic are your shoes?</h2>
        <p>Two matching shoes in broad daylight? We have questions. Choose your proposed mismatch. The department will issue a completely unofficial verdict.</p>
        <p className="luxChallengeFinePrint">No photo, account or purchase required. For the actual walk, shoes should fit safely and comfortably.</p>
      </div>
      <div className="luxChallengeCard">
        <fieldset>
          <legend>Choose your level of wrong</legend>
          {choices.map((item) => (
            <label key={item.id} className={`luxChallengeOption ${choice === item.id ? 'isSelected' : ''}`}>
              <input
                type="radio"
                name="shoe-mismatch"
                value={item.id}
                checked={choice === item.id}
                onChange={() => { setChoice(item.id); setCopied(false); trackEvent('shoe_challenge_select', { verdict: item.id }); }}
              />
              <span>{item.label}</span>
            </label>
          ))}
        </fieldset>
        <div className="luxChallengeVerdict" aria-live="polite">
          <span>OFFICIAL-ISH VERDICT</span>
          <strong>{selected.verdict}</strong>
          <p>{selected.note}</p>
        </div>
        <div className="luxChallengeActions">
          <button type="button" onClick={copyChallenge}>
            {copied ? <Check size={17} /> : <Copy size={17} />}
            {copied ? 'Challenge copied' : 'Copy your challenge'}
          </button>
          <a href="#join">Bring your chaos to the walk <ArrowRight size={17} /></a>
        </div>
        <p className="luxChallengeFinePrint">Share your verdict and challenge a friend. Your choices stay on this page; nothing is uploaded.</p>
      </div>
    </div>
  );
}
