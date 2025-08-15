'use client';
import React from 'react';
import Link from 'next/link';
import {
  InstagramLogoIcon,
  LinkedinLogoIcon,
  GithubLogoIcon,
  YoutubeLogoIcon,
} from '@phosphor-icons/react';

export default function Footer() {
  return (
    <footer className="lg:pt-12 md:pt-8 pt-4 w-full">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 justify-between py-8 w-full lg:flex-row">
          <div className="flex flex-col gap-4 w-full">
            <div className="w-fit h-fit">
              <div className="w-16 h-16 rounded-full border bg-zinc-100 border-zinc-200"></div>
            </div>
            <div className="max-w-lg text-balance heading-3-responsive font-semibold font-heading">
              Let&apos;s work together to make complex{' '}
              <span className="text-primary italic">simple</span>
            </div>
            {/* <div className="flex justify-center items-center px-6 py-2 font-semibold text-white rounded-full border border-transparent w-fit h-fit bg-primary">
              Connect with me
            </div> */}
          </div>

          <div className="flex flex-col gap-2 lg:justify-end lg:items-end w-full">
            <div className="flex flex-col gap-1 py-2">
              <p className="heading-5-responsive font-semibold font-heading lg:text-right text-foreground">
                Ang Yi Xin
              </p>
              <p className="lg:text-right text-muted-foreground">
                Design Lead & Design Engineer
                <br />
                angyixin@gmail.com
              </p>
            </div>

            <div className="flex gap-5 lg:justify-end w-full">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors content-default">
                <InstagramLogoIcon size={32} weight="fill" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors content-default">
                <LinkedinLogoIcon size={32} weight="fill" />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors content-default">
                <GithubLogoIcon size={32} weight="fill" />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors content-default">
                <YoutubeLogoIcon size={32} weight="fill" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-start py-8 w-full border-t border-border lg:flex-row text-muted-foreground">
          <h2 className="">© Copyright 2025 Artylope. All Rights Reserved.</h2>
          <h2 className="max-w-md lg:text-right text-left">
            Made with ❤️ by Yi Xin with React, NextJS, MDX and Tailwind.
          </h2>
        </div>
      </div>
    </footer>
  );
}
