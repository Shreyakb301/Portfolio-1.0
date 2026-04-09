"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageHeaderIntroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function PageHeaderIntro({
  eyebrow,
  title,
  description,
  titleClassName,
  descriptionClassName,
}: PageHeaderIntroProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="page-eyebrow"
      >
        {eyebrow}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className={cn("page-title", titleClassName)}
      >
        {title}
      </motion.h1>

      {description ? (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className={cn("work-page-copy", descriptionClassName)}
        >
          {description}
        </motion.p>
      ) : null}
    </>
  );
}
