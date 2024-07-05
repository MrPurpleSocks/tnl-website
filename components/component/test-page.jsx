/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/lDwu7U4NTpO
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'
import { Chivo } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

chivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"

export function TestPage() {
  return (
    (<div className="dark:bg-[#1c1c1e] dark:text-white">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="grid gap-6">
            <img
              src="/placeholder.svg"
              alt="NotDeadYet Robot"
              width={800}
              height={600}
              className="rounded-lg object-cover w-full aspect-[4/3]" />
            <div className="grid md:grid-cols-2 gap-4">
              <img
                src="/placeholder.svg"
                alt="NotDeadYet Robot Detail"
                width={400}
                height={300}
                className="rounded-lg object-cover w-full aspect-[4/3]" />
              <img
                src="/placeholder.svg"
                alt="NotDeadYet Robot Detail"
                width={400}
                height={300}
                className="rounded-lg object-cover w-full aspect-[4/3]" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <h1 className="text-3xl font-bold">NotDeadYet</h1>
              <p className="text-[#86868b]">Designed and built by Team Ninth Life</p>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[#86868b]">Speed</span>
                <span className="font-medium">45 mph</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#86868b]">RPM</span>
                <span className="font-medium">3,200 RPM</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#86868b]">Weight</span>
                <span className="font-medium">250 lbs</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#86868b]">Armor</span>
                <span className="font-medium">1/4 inch steel</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#86868b]">Weapon</span>
                <span className="font-medium">Spinning Disc</span>
              </div>
            </div>
            <div className="grid gap-2">
              <h2 className="text-2xl font-bold">Upcoming Events</h2>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Battle Bots Tournament</h3>
                    <p className="text-[#86868b]">July 15, 2024</p>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-md bg-[#0071e3] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#0077f6] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Learn More
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Robot Rumble</h3>
                    <p className="text-[#86868b]">September 20, 2024</p>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-md bg-[#0071e3] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#0077f6] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid gap-2">
              <h2 className="text-2xl font-bold">RobotCombatEvents Ranking</h2>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">1st Place</h3>
                    <p className="text-[#86868b]">Battle Bots Tournament 2023</p>
                  </div>
                  <span className="font-medium">NotDeadYet</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">2nd Place</h3>
                    <p className="text-[#86868b]">Robot Rumble 2022</p>
                  </div>
                  <span className="font-medium">NotDeadYet</span>
                </div>
              </div>
            </div>
            <div className="grid gap-2">
              <h2 className="text-2xl font-bold">Previous Events</h2>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Battle Bots Tournament</h3>
                    <p className="text-[#86868b]">July 15, 2023</p>
                  </div>
                  <span className="font-medium">1st Place</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Robot Rumble</h3>
                    <p className="text-[#86868b]">September 20, 2022</p>
                  </div>
                  <span className="font-medium">2nd Place</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
  );
}