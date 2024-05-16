import { StaticImageData } from 'next/image';

import React, {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from 'react';

export interface ChildrenType {
  children: React.ReactNode;
}

export interface IconProps {
  className?: string;
}

export interface DocType {
  techno?: 'react' | 'next' | 'solid' | 'nuxt' | 'vue' | 'svelte' | 'angular';
  snippet?: 'short' | 'long' | 'special';
  version?: number;
}