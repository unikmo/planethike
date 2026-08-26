import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SeoLanding from '../../SeoLanding';

type GuideSection = {
  heading: string;
  body: string;
  points?: string[];
  table?: { caption?: string; columns: string[]; rows: string[][] };
};

type Guide = {
  title: string;
  description: string;
  intro: string;
  bullets?: string[];
  sections: GuideSection[];
  faq?: { q: string; a: string }[];
  related?: { href: string; label: string }[];
};

const guides: Record<string, Guide> = {
  'how-many-miles-is-10000-steps': {
    title: 'How Many Miles Is 10,000 Steps?',
    description: 'Calculate how many miles 10,000 steps may equal, see a stride-length table and learn why your own distance can differ.',
    intro: 'For many adults, 10,000 steps lands somewhere around 4 to 5 miles. The useful answer is a range, not one magic number, because stride length changes the distance.',
    bullets: ['Quick answer: roughly 4–5 miles', 'Stride length changes the result', '10,000 steps is not a 10K race', 'Use your own measured stride for a better estimate'],
    sections: [
      {
        heading: 'The quick answer',
        body: 'A common adult walking stride puts 10,000 steps in the neighbourhood of 4 to 5 miles. A shorter stride can fall below that range; a longer stride can move above it. That is why two people can finish the same step count at different distances.',
        table: {
          caption: 'Illustrative 10,000-step distance by average stride length',
          columns: ['Average stride', 'Approx. miles', 'Approx. kilometres'],
          rows: [
            ['24 in / 61 cm', '3.79 mi', '6.10 km'],
            ['26 in / 66 cm', '4.10 mi', '6.59 km'],
            ['28 in / 71 cm', '4.42 mi', '7.11 km'],
            ['30 in / 76 cm', '4.73 mi', '7.62 km'],
            ['32 in / 81 cm', '5.05 mi', '8.13 km'],
          ],
        },
      },
      {
        heading: 'How to estimate your own distance',
        body: 'For a better personal estimate, measure a known distance, walk it naturally and count your steps. Divide the distance by the number of steps to estimate your average stride, then multiply that stride by 10,000.',
        points: [
          'Use a normal walking pace rather than deliberately lengthening your stride.',
          'Measure on reasonably flat ground if you want a simple baseline.',
          'Repeat the measurement once or twice and average the result.',
          'Expect hills, crowds and fatigue to change stride length during a real event.',
        ],
      },
      {
        heading: '10,000 steps is not 10 kilometres',
        body: 'The names sound similar, but they describe different things. A 10K is a fixed 10-kilometre distance. Ten thousand steps is a personal step count whose distance changes with stride. PlanetHike uses the step target because it is easy to understand across cities, not because every participant walks exactly 10 kilometres.',
      },
      {
        heading: 'What this means for The Chaos Walk',
        body: 'The event target is around 10,000 steps, not a certified race distance. City routes can be designed around the social experience, local conditions and Chaos Drops while participants track their own step count. The point is the shared day, not perfect measurement.',
      },
    ],
    faq: [
      { q: 'Is 10,000 steps always 5 miles?', a: 'No. Five miles is a useful upper-end rule of thumb for many walkers, but stride length can put 10,000 steps below or above it.' },
      { q: 'How do I convert my steps to miles?', a: 'Use a measured route to estimate your average stride, then multiply that stride by your step count and convert the result to miles.' },
      { q: 'Does walking faster change the distance?', a: 'It can. People often lengthen their stride slightly at faster speeds, so pace may change the distance covered by the same number of steps.' },
    ],
    related: [
      { href: '/guides/10000-steps-in-km', label: '10,000 steps in kilometres' },
      { href: '/guides/how-long-to-walk-10000-steps', label: 'How long 10,000 steps takes' },
      { href: '/10000-step-challenge', label: 'The PlanetHike 10,000-step challenge' },
    ],
  },

  'how-long-to-walk-10000-steps': {
    title: 'How Long Does It Take to Walk 10,000 Steps?',
    description: 'See practical 10,000-step walking-time estimates by cadence and learn what can make your own time shorter or longer.',
    intro: 'For many people, 10,000 steps takes roughly 1½ to 2 hours of active walking. Your cadence, terrain, breaks and event stops can move that number considerably.',
    bullets: ['Typical active-walking range: about 1½–2 hours', 'Cadence matters more than a universal pace', 'Breaks and hills add elapsed time', 'Chaos Walk time includes social moments'],
    sections: [
      {
        heading: 'Walking-time estimates by cadence',
        body: 'Cadence means how many steps you take per minute. Dividing 10,000 by your usual cadence gives a useful active-walking estimate before breaks.',
        table: {
          caption: 'Approximate active walking time for 10,000 steps',
          columns: ['Cadence', '10,000-step time', 'What it may feel like'],
          rows: [
            ['80 steps/min', '125 min', 'Relaxed / easy'],
            ['90 steps/min', '111 min', 'Comfortable'],
            ['100 steps/min', '100 min', 'Purposeful'],
            ['110 steps/min', '91 min', 'Brisk'],
            ['120 steps/min', '83 min', 'Very brisk for many walkers'],
          ],
        },
      },
      {
        heading: 'Active time versus elapsed time',
        body: 'A watch may show ninety minutes of moving time while the whole outing takes two hours or more. Traffic crossings, photos, water stops, meeting friends and challenge moments all add elapsed time without changing the step target.',
        points: ['Active time = time actually moving.', 'Elapsed time = the full outing from start to finish.', 'Event-day plans should use elapsed time, not only walking time.'],
      },
      {
        heading: 'What makes 10,000 steps take longer',
        body: 'Hills, crowded pavements, uneven surfaces, accessibility needs, hot weather and group size can all slow the day down. A large social walk should deliberately leave room for people to move at different comfortable paces.',
      },
      {
        heading: 'Why The Chaos Walk takes longer on purpose',
        body: 'PlanetHike is not trying to optimise everyone into the fastest possible 10,000 steps. Chaos Drops, fan moments and city interactions are part of the product. If the day takes longer because people stopped to create something memorable, that is not a failure of the route.',
      },
    ],
    faq: [
      { q: 'Can I walk 10,000 steps in one hour?', a: 'That would require a very high cadence for most people. For a social walk, a more realistic active-walking window is often around 1½ to 2 hours.' },
      { q: 'Do breaks count toward the step target?', a: 'The steps still count whenever you take them. Breaks affect elapsed time, not the number of steps already recorded.' },
      { q: 'How long should I allow for The Chaos Walk?', a: 'Allow longer than your plain 10,000-step walking time because the event includes social moments and local challenge stops.' },
    ],
    related: [
      { href: '/guides/how-many-miles-is-10000-steps', label: '10,000 steps in miles' },
      { href: '/guides/10k-walk-training-plan', label: 'Beginner 10K walk training plan' },
      { href: '/the-chaos-walk', label: 'How The Chaos Walk works' },
    ],
  },

  '10000-steps-in-km': {
    title: '10,000 Steps in KM: What Distance Is It?',
    description: 'Convert 10,000 steps to kilometres with a stride-length table and a simple method for estimating your personal distance.',
    intro: 'For many adults, 10,000 steps is roughly 6 to 8 kilometres. The exact distance depends on stride length, so the best answer is a range plus a personal estimate.',
    bullets: ['Useful range: roughly 6–8 km', 'Longer strides cover more kilometres', '10,000 steps ≠ 10 km', 'A measured route gives the best personal estimate'],
    sections: [
      {
        heading: '10,000-step kilometre table',
        body: 'The table below uses simple stride-length examples. It is not a promise about your own distance; it shows how strongly stride changes the result.',
        table: {
          columns: ['Average stride', 'Approx. distance'],
          rows: [
            ['60 cm', '6.0 km'],
            ['65 cm', '6.5 km'],
            ['70 cm', '7.0 km'],
            ['75 cm', '7.5 km'],
            ['80 cm', '8.0 km'],
          ],
        },
      },
      {
        heading: 'The simple formula',
        body: 'If your average stride is measured in metres, multiply it by 10,000 and divide by 1,000. A 0.72-metre average stride, for example, gives an estimated 7.2 kilometres for 10,000 steps.',
      },
      {
        heading: 'Why your tracker may disagree',
        body: 'Some devices estimate distance from GPS, some from stride models and some combine both. GPS drift, indoor walking and changing stride can all create differences between step-derived distance and route-derived distance.',
        points: ['Use the same device consistently if you care about personal trends.', 'Do not treat a tracker estimate as a certified course measurement.', 'For event logistics, use the planned route distance as well as participant step targets.'],
      },
      {
        heading: 'Why PlanetHike uses a step target',
        body: 'The Chaos Walk is designed as a social city experience, not a road race. A step target is familiar, works across different local route shapes and keeps the event concept simple: around 10,000 steps, two different shoes, off colours and one very visible day.',
      },
    ],
    faq: [
      { q: 'Is 10,000 steps 8 km?', a: 'It can be close to 8 km for someone with a longer stride, but many walkers will cover less. Roughly 6 to 8 km is a more useful broad range.' },
      { q: 'Why is 10,000 steps not exactly 10 km?', a: 'A step is not a fixed unit of length. Ten kilometres is fixed; ten thousand steps changes with the walker.' },
    ],
    related: [
      { href: '/guides/how-many-miles-is-10000-steps', label: '10,000 steps in miles' },
      { href: '/guides/how-long-to-walk-10000-steps', label: 'How long 10,000 steps takes' },
      { href: '/10000-step-challenge', label: 'Join a 10,000-step challenge' },
    ],
  },

  '10000-steps-calories': {
    title: 'How Many Calories Does 10,000 Steps Burn?',
    description: 'Understand why there is no single calorie number for 10,000 steps, what changes energy use and how to use tracker estimates sensibly.',
    intro: 'There is no reliable universal calorie number for 10,000 steps. Body size, pace, hills, walking efficiency, temperature and the actual distance covered can all change energy use.',
    bullets: ['No single calorie number fits everyone', 'Distance and body size matter', 'Wearable estimates are approximations', 'PlanetHike is not a weight-loss programme'],
    sections: [
      {
        heading: 'Why online calorie numbers disagree',
        body: 'Two people can take exactly 10,000 steps and cover different distances. Even if the distance is identical, their bodies may use different amounts of energy. That makes a single “10,000 steps burns X calories” claim misleading.',
      },
      {
        heading: 'The factors that matter most',
        body: 'Energy expenditure changes with several variables, many of which interact. Think of a tracker value as an estimate built from assumptions rather than a laboratory measurement.',
        points: ['Body mass and body composition', 'Actual distance covered', 'Walking speed and cadence', 'Hills, stairs and surface', 'Temperature and wind', 'Carrying a bag or other load', 'Individual gait and walking efficiency'],
      },
      {
        heading: 'How to use a wearable estimate',
        body: 'A wearable can be useful when you compare your own activity over time using the same device. It is less useful as a precise comparison between different people or devices. If your watch says one number and a website says another, that difference is normal.',
      },
      {
        heading: 'What PlanetHike promises instead',
        body: 'The Chaos Walk is about participation, creativity and a memorable city day. PlanetHike does not promise calorie burn, weight loss or medical outcomes. If 10,000 steps is much more activity than you normally do, build up gradually and choose footwear that is safe and comfortable even when the two shoes look deliberately different.',
      },
    ],
    faq: [
      { q: 'Can 10,000 steps help with fitness?', a: 'Walking can be part of an active lifestyle, but individual health effects depend on your circumstances. PlanetHike does not provide medical or weight-loss advice.' },
      { q: 'Is my smartwatch calorie estimate accurate?', a: 'It is best treated as an approximation. Wearables can be useful for your own trends but should not be treated as exact calorie measurements.' },
      { q: 'Do hills burn more energy?', a: 'Uphill walking generally requires more effort than level walking, but the exact difference varies by person, slope and pace.' },
    ],
    related: [
      { href: '/guides/how-long-to-walk-10000-steps', label: 'How long 10,000 steps takes' },
      { href: '/guides/10k-walk-training-plan', label: 'Train for a longer walk' },
      { href: '/10000-step-challenge', label: 'The PlanetHike step challenge' },
    ],
  },

  '10k-walk-training-plan': {
    title: '10K Walk Training Plan for Beginners',
    description: 'A practical six-week beginner walking plan that builds consistency, time on your feet and confidence before a longer event.',
    intro: 'You do not need to jump straight to a long walk. A simple six-week progression can build consistency first, then extend one weekly walk until event distance feels familiar.',
    bullets: ['Six-week progression', 'Three to four walks per week', 'One gradually longer walk', 'Event-week taper'],
    sections: [
      {
        heading: 'The six-week plan',
        body: 'Keep most walking comfortable enough that you could still hold a conversation. The long walk is the main progression; the other sessions create consistency without turning every day into a test.',
        table: {
          caption: 'Example beginner plan — adjust to your current ability',
          columns: ['Week', 'Easy walks', 'Long walk', 'Focus'],
          rows: [
            ['1', '3 × 20–30 min', '40 min', 'Create the habit'],
            ['2', '3 × 25–30 min', '50 min', 'Comfortable consistency'],
            ['3', '3 × 30 min', '60 min', 'Time on feet'],
            ['4', '2–3 × 30–35 min', '75 min', 'Steady endurance'],
            ['5', '2–3 × 30 min', '90–105 min', 'Near event duration'],
            ['6', '2 × 20–30 min', 'Event / easy long walk', 'Fresh legs, no last-minute heroics'],
          ],
        },
      },
      {
        heading: 'Practise the two-shoe rule safely',
        body: 'PlanetHike wants the shoes to look unmistakably different, not to create a biomechanical experiment. Choose two shoes that both fit well, are already broken in and feel reasonably similar in support and sole height.',
        points: ['Do not wear a brand-new shoe for the first time on event day.', 'Avoid pairing footwear that changes your leg height dramatically.', 'Test the exact combination on at least one longer training walk.', 'If the pairing causes pain or instability, choose a different mismatch.'],
      },
      {
        heading: 'What to do if you miss a week',
        body: 'Do not try to “catch up” by cramming missed distance into a few days. Resume from a comfortable level and repeat a week if needed. Consistency matters more than following a calendar perfectly.',
      },
      {
        heading: 'Event week',
        body: 'Reduce training volume, sleep normally, check the weather and confirm the shoes you have already tested. The Chaos Walk is social rather than competitive, so arriving comfortable is more useful than arriving exhausted from a final training push.',
      },
    ],
    faq: [
      { q: 'Can a complete beginner train for a 10K walk in six weeks?', a: 'Many people can build substantially in six weeks, but starting ability varies. If the plan feels too aggressive, extend it rather than forcing the schedule.' },
      { q: 'Should I train every day?', a: 'Not necessarily. The example plan uses three or four walking days per week so recovery remains part of the programme.' },
      { q: 'Do I need special shoes?', a: 'You need comfortable, safe footwear. For The Chaos Walk the shoes should look different, but both should still work for a long walk.' },
    ],
    related: [
      { href: '/guides/how-long-to-walk-10000-steps', label: 'Estimate your 10,000-step time' },
      { href: '/guides/10000-steps-in-km', label: 'Estimate 10,000 steps in km' },
      { href: '/the-chaos-walk', label: 'Plan for The Chaos Walk' },
    ],
  },

  'walking-challenge-team-names': {
    title: 'Walking Challenge Team Names: 100 Ideas',
    description: 'A real list of 100 funny, clever and memorable walking-challenge team names for friends, workplaces, clubs and Chaos Walk crews.',
    intro: 'A good walking-team name is short enough for a group chat, distinctive enough for a sign and easy enough to shout when somebody is fifty metres behind. Here are 100 actual ideas.',
    bullets: ['100 names — not a teaser', 'Friends, work, clubs and Chaos-style options', 'Short names that work on signs', 'A formula for making your own'],
    sections: [
      { heading: 'Chaos-style names', body: 'Built for people who want the name to feel slightly wrong on purpose.', points: ['Sole Rebels', 'The Wrong Shoes', 'Step Misfits', 'Off Colour Crew', 'Ten-K Trouble', 'The Unmatched', 'Walk This Weird', 'Sole Disorder', 'Colour Collision', 'The Chaos Cadence'] },
      { heading: 'Funny walking names', body: 'Light, obvious and easy to remember.', points: ['Blister Sisters', 'Agony of De Feet', 'Sole Survivors', 'Walkaholics Anonymous', 'Happy Feet-ish', 'The Slow Motion Club', 'Lost but Moving', 'Are We There Yet?', 'Pace Invaders', 'The Stroll Models'] },
      { heading: 'Workplace team names', body: 'For teams escaping the spreadsheet for a few hours.', points: ['Out of Office', 'Meeting Escape Plan', 'Step Department', 'Walking Capital', 'The Pace Makers', '10KPI', 'Human Resources in Motion', 'Quarterly Footfall', 'The Walking Agenda', 'Calendar Blockers'] },
      { heading: 'Friends and family names', body: 'Names that work even when the group is held together mainly by snacks.', points: ['Sole Mates', 'The Wander List', 'Family Footwork', 'Step Siblings', 'The Long Way Round', 'Miles of Smiles', 'Cousins in Motion', 'The Weekend Walkers', 'Chosen Family Footsteps', 'The Snack Pack Striders'] },
      { heading: 'Fast-sounding names', body: 'For a walking team that enjoys pretending this is Formula 1.', points: ['Velocity-ish', 'Rapid-ish Response', 'Full Send Strollers', 'The Fast Lane Walkers', 'Stride Force', 'Turbo Toes', 'Maximum Cadence', 'The Quick Steps', 'Forward Motion', 'No Brakes, Just Breaks'] },
      { heading: 'Slow-and-proud names', body: 'Because finishing with a story is better than winning an imaginary race.', points: ['Eventually There', 'No Rush Club', 'Scenic Route Society', 'Slow Motion Legends', 'The Casual Cadence', 'Stroll Patrol', 'Pace Optional', 'Leisure League', 'The Detour Department', 'Take Your Time Team'] },
      { heading: 'City and neighbourhood names', body: 'Swap in a local reference to make these your own.', points: ['Street Level', 'Block Party Walkers', 'City Sole', 'Neighbourhood Nomads', 'Local Legends on Foot', 'The Crosswalk Collective', 'Sidewalk Society', 'Urban Wanderers', 'The Long Block', 'Home Turf Hikers'] },
      { heading: 'Fitness-ish names', body: 'Active without becoming gym-bro theatre.', points: ['Step by Step', 'Daily Motion', 'The Long Game', 'Move More Crew', 'Cardio Casuals', 'Walk It Out', 'The Active Ingredient', 'Steady State', 'The Extra Mile-ish', 'Motion Pending'] },
      { heading: 'Wordplay names', body: 'For people who cannot resist a terrible pun.', points: ['These Boots Were Made for Talking', 'Walk and Roll', 'Sole Searching', 'Toe-tal Chaos', 'Stride and Prejudice', 'Lord of the Blings', 'Walkie Talkies', 'Pavement Issues', 'Foot Loose', 'Step Aside'] },
      { heading: 'Short names for shirts and signs', body: 'One or two words. Big type. No explanation required.', points: ['Unmatched', 'Misfits', 'Strollers', 'Sideways', 'Offbeat', 'Footwork', 'Roamers', 'Detour', 'Cadence', 'Wrongway'] },
      { heading: 'Make your own name', body: 'The easiest formula is local reference + inside joke + walking word. Keep it short enough that somebody can read it in a photo.', points: ['Use a street, neighbourhood or city nickname.', 'Borrow a harmless inside joke from the group.', 'Add a walking word: sole, stride, step, stroll, pace, route, mile.', 'Read it aloud once. If you have to explain the pun for thirty seconds, shorten it.'] },
    ],
    faq: [
      { q: 'What makes a good walking challenge team name?', a: 'Short, memorable and easy to say. Names that work in a group chat and on a sign usually work better than long complicated jokes.' },
      { q: 'Can we use one of these names?', a: 'Yes. These suggestions are provided as ideas for personal or event team naming. Check trademarks if you plan to commercialise a name.' },
    ],
    related: [
      { href: '/guides/walking-challenge-ideas', label: 'Walking challenge ideas' },
      { href: '/groups', label: 'Bring a group to The Chaos Walk' },
      { href: '/guides/walking-scavenger-hunt', label: 'Walking scavenger hunt ideas' },
    ],
  },

  'walking-challenge-ideas': {
    title: 'Walking Challenge Ideas That Are Actually Fun',
    description: 'Forty walking challenge ideas for friends, workplaces and communities, organised by format so the event feels social instead of like a spreadsheet.',
    intro: 'The easiest way to kill a walking challenge is to make the step counter the entire product. These ideas add surprise, identity, teamwork and stories to the distance.',
    bullets: ['40 practical ideas', 'Solo, team and city formats', 'Low-equipment options', 'Safety-first prompts'],
    sections: [
      { heading: 'Visual challenges', body: 'Give people something recognisable to create or photograph.', points: ['Wear two different shoes', 'Choose one deliberately clashing colour', 'Recreate a famous album-cover pose', 'Take a group shadow photo', 'Find three objects in the same unexpected colour', 'Make a human arrow pointing to the route', 'Photograph the best accidental colour clash', 'Create a before-and-after shoe photo'] },
      { heading: 'Team challenges', body: 'Small tasks that reward collaboration instead of raw speed.', points: ['Walk one kilometre with a new conversation partner', 'Invent a ten-second team chant', 'Create a silent group pose', 'Choose a team name before the halfway point', 'Find a shared local memory', 'Take turns choosing the next safe turn on an open route', 'Create a team fan wave', 'Finish one section with everyone in a single photo'] },
      { heading: 'Observation challenges', body: 'Make the city itself part of the game.', points: ['Find the oldest date visible on a building', 'Spot five different door colours', 'Find public art you have never noticed', 'Count three different types of street tree', 'Find a local business with an unusual name', 'Spot a building detail above eye level', 'Find a city symbol or crest', 'Photograph a reflection that changes the scene'] },
      { heading: 'Milestone challenges', body: 'Attach one task to a distance point so the route changes character as people progress.', points: ['2,500 steps: first group photo', '4,000 steps: swap walking partners', '5,000 steps: fan moment', '6,500 steps: local trivia prompt', '7,500 steps: create the strangest safe group pose', '9,000 steps: send one encouraging message to another team', 'Final 500 steps: phones down', '10,000 steps: shared finish ritual'] },
      { heading: 'Workplace-friendly challenges', body: 'Ideas that work without turning participation into forced corporate fun.', points: ['Cross-department walking pairs', 'No-work-talk kilometre', 'Local lunch-route walk', 'Photo challenge judged by colleagues', 'Manager walks at the back', 'Team chooses a charity conversation topic', 'One meeting replaced by a walk', 'Best mismatched-shoe award'] },
      { heading: 'Low-pressure social challenges', body: 'Useful for groups where not everybody wants to perform.', points: ['Find one thing you have never noticed before', 'Walk five minutes in comfortable silence', 'Choose a favourite street', 'Share one local recommendation', 'Take one photo only for yourself', 'Notice three sounds', 'Find a place you would return to', 'Finish with a group snack or drink stop'] },
    ],
    faq: [
      { q: 'How many challenges should a walking event include?', a: 'Usually fewer than you think. A handful of well-spaced moments is easier to enjoy than a long checklist that competes with walking safely.' },
      { q: 'Should walking challenges be competitive?', a: 'They can be, but they do not need to be. Cooperative and creative prompts often work better for mixed-ability groups.' },
      { q: 'What should we avoid?', a: 'Avoid prompts that require entering private property, distracting people near traffic, filming strangers without permission or taking unnecessary physical risks.' },
    ],
    related: [
      { href: '/guides/walking-scavenger-hunt', label: 'Walking scavenger hunt prompts' },
      { href: '/guides/walking-challenge-team-names', label: '100 walking team names' },
      { href: '/the-chaos-walk', label: 'See PlanetHike Chaos Drops' },
    ],
  },

  'how-to-organize-a-charity-walk': {
    title: 'How to Organize a Charity Walk',
    description: 'A practical charity-walk framework covering the participant promise, cause, money flow, route, permissions, volunteers, safety, registration and post-event reporting.',
    intro: 'A charity walk is not just a route plus a donation button. The strongest events define the participant experience, money flow and local operating ownership before they start promoting.',
    bullets: ['Experience + cause + operations', 'Transparent money flow', 'Named local ownership', 'Post-event proof'],
    sections: [
      { heading: '1. Define the participant promise', body: 'Write one sentence explaining why somebody would attend even before the charity is mentioned. A strong experience earns attention; the cause gives that attention additional meaning.', points: ['What happens on the day?', 'Who is it for?', 'How far is it?', 'Is it a race, social walk or challenge?', 'What makes it recognisable?'] },
      { heading: '2. Define the cause and money flow', body: 'Avoid vague “proceeds support…” language. Decide exactly how funds are generated, what amount or percentage is transferred, who receives it and when you will report the transfer.', points: ['Donation, registration fee, merchandise contribution or sponsorship?', 'Gross amount, fixed amount per item or net proceeds?', 'Named recipient organisation?', 'Public reporting date?'] },
      { heading: '3. Build the local operating model', body: 'Every location needs a named person or team responsible for turning the idea into a safe local event. Global branding cannot replace local route knowledge.', points: ['Event lead', 'Route owner', 'Volunteer coordinator', 'Safety/incident point', 'Participant communications', 'Content/photo responsibility'] },
      { heading: '4. Route, permissions and safety', body: 'Choose a route appropriate for expected participant numbers and mobility needs. Check local requirements for public-space use, road crossings, assembly, signage, insurance and emergency planning rather than assuming one rule works in every city.' },
      { heading: '5. Registration and communications', body: 'Collect only the information you genuinely need, publish a privacy notice and explain what registration does and does not guarantee. Send confirmed route, timing, accessibility and safety details before event day.' },
      { heading: '6. Event-day system', body: 'Create a simple operating checklist that volunteers can follow without needing the founder on the phone.', points: ['Check-in / welcome', 'Route briefing', 'Volunteer positions', 'Water and weather plan', 'Incident escalation', 'Accessibility adjustments', 'Finish ritual', 'Lost-property/contact process'] },
      { heading: '7. Close the loop after the walk', body: 'Publish the numbers that matter: participation, funds generated, amount transferred, recipient confirmation and what happens next. Post-event proof is part of the trust product, not optional administration.' },
    ],
    faq: [
      { q: 'Do I need permission to organise a charity walk?', a: 'Requirements vary by location, route and event size. Check the relevant local authority and public-space rules before promoting a route as confirmed.' },
      { q: 'Should every participant have to fundraise?', a: 'No. Some events use participant fundraising, while others generate contributions through tickets, sponsorship or merchandise. The important part is making the model explicit.' },
      { q: 'What should be published after the event?', a: 'At minimum, publish the key participation and funding figures you promised to report, including the amount transferred to the named cause partner.' },
    ],
    related: [
      { href: '/walk-for-a-cause', label: 'PlanetHike walk-for-a-cause model' },
      { href: '/city-leads', label: 'How PlanetHike uses local City Leads' },
      { href: '/guides/how-to-start-a-walking-group', label: 'Start a walking group' },
    ],
  },

  'how-to-start-a-walking-group': {
    title: 'How to Start a Walking Group',
    description: 'A practical guide to launching a walking group: purpose, meeting rhythm, routes, newcomer onboarding, safety, communication and the first four walks.',
    intro: 'The easiest walking groups to sustain are predictable enough to trust and distinctive enough to miss when you skip them.',
    bullets: ['Choose one clear purpose', 'Make the meeting rhythm predictable', 'Design for newcomers', 'Give the group a recurring ritual'],
    sections: [
      { heading: 'Decide what the group is for', body: '“A walking group” is too broad to guide expectations. Choose the main reason people should join: social connection, gentle activity, city exploration, training, creative walks or event preparation.', points: ['Who is the group for?', 'What pace should people expect?', 'How long are typical walks?', 'Can people arrive alone?', 'What happens in bad weather?'] },
      { heading: 'Choose a boringly reliable meeting system', body: 'Consistency removes friction. One recognisable meeting point and a predictable day/time are more valuable than constantly inventing the perfect route.' },
      { heading: 'Design the first four walks', body: 'The first month should teach people what the group feels like without requiring a giant programme.', table: { columns: ['Walk', 'Purpose', 'Simple format'], rows: [['1', 'Make joining easy', 'Short route + introductions'], ['2', 'Create familiarity', 'Same start point + new loop'], ['3', 'Add identity', 'Introduce one recurring ritual'], ['4', 'Invite ownership', 'Let members suggest the next route']] } },
      { heading: 'Make newcomers feel expected', body: 'State the basics publicly: meeting point, pace, distance, accessibility limits, weather rule and whether there is a cost. A newcomer should not need to message an insider just to understand how to join.' },
      { heading: 'Create one repeatable ritual', body: 'A shared photo, question, colour, object or challenge can turn a generic weekly walk into something members identify with. Keep it optional enough that a newcomer can still participate comfortably.' },
      { heading: 'Know when to add structure', body: 'Once attendance grows, add a backup route lead, simple code of conduct, emergency contact process and a way to communicate cancellations. Do not wait until one organiser becomes the single point of failure.' },
    ],
    faq: [
      { q: 'How many people do I need to start a walking group?', a: 'Two or three consistent people are enough to begin. Reliability matters more than launching with a large crowd.' },
      { q: 'Should a walking group be free?', a: 'It can be. If you charge, be clear about what the fee covers and any responsibilities that come with the organised activity.' },
      { q: 'How do I get people to come back?', a: 'Predictability, newcomer friendliness and a clear group identity usually matter more than constantly changing routes.' },
    ],
    related: [
      { href: '/groups', label: 'Bring your group to The Chaos Walk' },
      { href: '/guides/walking-challenge-ideas', label: 'Ideas for group walking challenges' },
      { href: '/city-leads', label: 'Lead a PlanetHike city' },
    ],
  },

  'walking-scavenger-hunt': {
    title: 'Walking Scavenger Hunt Ideas for Groups',
    description: 'Forty safe, low-equipment walking scavenger-hunt prompts for friends, schools, workplaces and community groups.',
    intro: 'A good walking scavenger hunt makes people notice more without making them stare at a checklist while crossing the road. These forty prompts are designed to be simple, visible and low-risk.',
    bullets: ['40 ready-to-use prompts', 'Photo, observation and team categories', 'No private-property tasks', 'Easy to adapt to any city'],
    sections: [
      { heading: 'Colour and shape prompts', body: 'Easy visual finds that work almost anywhere.', points: ['A door in an unexpected colour', 'Three things that are the same colour', 'A perfect circle', 'A triangle that is not a traffic sign', 'Five different shades of one colour', 'A reflection that doubles a shape', 'Something striped', 'A pattern made by shadows'] },
      { heading: 'Local-detail prompts', body: 'Make people look above, below and around the usual line of sight.', points: ['The oldest year visible on a building', 'A street name nobody in the group knew', 'A piece of public art', 'A local crest or city symbol', 'An unusual balcony or window', 'A building detail above eye level', 'A tiny independent shop', 'A sign with a surprising word'] },
      { heading: 'Nature-in-the-city prompts', body: 'Useful even on urban routes.', points: ['Three different leaf shapes', 'A tree growing in an unexpected place', 'A bird you can identify', 'A flower in a public space', 'A shadow made by a tree', 'Water — fountain, river, canal or rain', 'A plant growing through a crack', 'Something moving in the wind'] },
      { heading: 'Team photo prompts', body: 'Keep the task within your own group rather than filming strangers.', points: ['Everyone points in a different direction', 'Recreate a band photo', 'Make a human arrow', 'Only the mismatched shoes in frame', 'A photo using a reflection', 'A fan wave', 'A freeze-frame walking pose', 'The smallest safe space the group can fit into'] },
      { heading: 'Sound and observation prompts', body: 'Not every answer needs a photograph.', points: ['Name three different sounds in one minute', 'Find the quietest point on the route', 'Find the busiest point on the route', 'Spot something you have walked past before but never noticed', 'Find a place you would bring a visitor', 'Identify one smell from a café, market or garden', 'Find a place to sit for five minutes', 'Notice one accessibility feature in the streetscape'] },
      { heading: 'How to run the hunt safely', body: 'Set boundaries before the start so the game never becomes a reason to ignore traffic, trespass or pressure strangers.', points: ['No entering private property.', 'No prompt should require crossing unsafely or stopping in a cycle lane.', 'Do not photograph identifiable strangers without permission.', 'Use milestone prompts rather than asking people to stare at phones continuously.', 'Give a clear finish time and meeting point.'] },
    ],
    faq: [
      { q: 'How many scavenger-hunt prompts should we use?', a: 'For a normal group walk, 8 to 15 prompts is usually enough. Choose more only if the hunt itself is the main event.' },
      { q: 'Can children use these prompts?', a: 'Many can be adapted for supervised school or family groups, but the organiser remains responsible for age-appropriate boundaries and local safeguarding.' },
      { q: 'Do teams need to prove every answer?', a: 'Not necessarily. Decide whether the goal is competition, conversation or observation before the walk and choose a simple proof rule that matches it.' },
    ],
    related: [
      { href: '/guides/walking-challenge-ideas', label: '40 more walking challenge ideas' },
      { href: '/guides/walking-challenge-team-names', label: '100 team-name ideas' },
      { href: '/the-chaos-walk', label: 'How Chaos Drops work' },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides[slug];
  if (!guide) return {};
  const canonical = `/guides/${slug}`;
  return {
    title: `${guide.title} | PlanetHike`,
    description: guide.description,
    alternates: { canonical },
    openGraph: {
      title: `${guide.title} | PlanetHike`,
      description: guide.description,
      url: `https://planethike.org${canonical}`,
      type: 'article',
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides[slug];
  if (!guide) notFound();

  return <SeoLanding
    eyebrow="PLANETHIKE WALKING GUIDE"
    title={guide.title}
    intro={guide.intro}
    bullets={guide.bullets}
    sections={guide.sections}
    faq={guide.faq}
    relatedLinks={guide.related}
    ctaLabel="Join The Chaos Walk free"
  />;
}
