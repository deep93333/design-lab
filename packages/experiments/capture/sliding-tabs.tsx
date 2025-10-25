'use client';

import { motion, useAnimation } from 'motion/react';
import { useRef } from 'react';
import { cn } from './utils';
import {InboxIcon,HomeIcon,GearIcon} from '@deep-design-lab/ui'

type NavigationLink = {
  href: string;
  label: string;
  activePath: string;
  icon: React.ElementType;
};

const navigationLinks: NavigationLink[] = [
  { href: '/dashboard', label: 'Dashboard', activePath: '/dashboard', icon: HomeIcon },
  { href: '/projects', label: 'Projects', activePath: '/projects', icon: InboxIcon },
  { href: '/team', label: 'Team', activePath: '/team', icon: GearIcon },
];



export const SlidingTabs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const activeLinkRef = useRef<HTMLElement | null>(null);

  const updateBackground = async (element: HTMLElement) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    const left = elementRect.left - containerRect.left;

    if (!activeLinkRef.current) {
      controls.set({
        transition: undefined,
        opacity: 0,
        height: '100%',
        filter: 'blur(2px)',
        left: `${elementRect.left - containerRect.left}px`,
        width: `${elementRect.width}px`,
        scale: 1.5,
        transformOrigin: 'center',
      });
      activeLinkRef.current = element;

      controls.start({
        transition: {
          duration: 0.3,
          ease: 'easeOut',
        },
        top: 0,
        height: '100%',
        opacity: 1,
        scale: 1,
        width: `${elementRect.width}px`,
        filter: 'blur(0px)',
        left: `${left}px`,
      });
    } else {
      activeLinkRef.current = element;
      controls.start({
        transition: {
          duration: 0.3,
          ease: 'easeOut',
        },
        top: 0,
        height: '100%',
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        width: `${elementRect.width}px`,
        left: `${left}px`,
      });
    }
  };

  const resetBackground = () => {
    controls.start({
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
      opacity: 0,
      filter: 'blur(2px)',
      scale: 1.5,
    });
  };



  return (
    <div ref={containerRef} className="nav-container relative">
      <motion.div className="absolute top-0 bg-zinc-900/10 rounded-full" animate={controls} />

      <ul className="relative z-10 flex items-center gap-1">
        {navigationLinks.map((link, index) => {

          const Icon = link.icon;

          return (
            <li key={index}>
              <a
                href={link.href}
                className={cn(
                  'block rounded-6 flex items-center gap-2 px-3 py-1.5  text-zinc-400 font-medium transition-colors duration-200 hover:text-zinc-800',
                  'text-sm'
                  
                )}
                onMouseEnter={e => {
                  updateBackground(e.currentTarget);
                }}
                onMouseLeave={resetBackground}
               
              >
                <Icon className="!size-4" />
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
