/* STREAMING_CHUNK:Building the professional form... */
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const profileSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export default function ProfileSettingsForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
  });"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  profileSchema,
  defaultProfileValues,
  type ProfileFormValues,
} from "@/lib/schemas/profile-schema";
import type { SubmitProfile } from "@/types/profile";

interface ProfileSettingsFormProps {
  initialValues?: Partial<ProfileFormValues>;
  onSubmit: SubmitProfile;
}

export default function ProfileSettingsForm({
  initialValues,
  onSubmit,
}: ProfileSettingsFormProps) {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: { ...defaultProfileValues, ...initialValues },
    mode: "onBlur",
  });

  const onValid = async (values: ProfileFormValues) => {
    setSubmitError(null);
    setSubmitSuccess(false);
    try {
      const result = await onSubmit(values);
      if (!result.success) {
        setSubmitError(result.message ?? "Failed to update profile.");
        return;
      }
      setSubmitSuccess(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onValid)}
      noValidate
      aria-busy={isSubmitting}
      className="max-w-md space-y-6"
    >
      <h2 className="text-lg font-semibold">Profile Settings</h2>

      {submitError && (
        <div
          role="alert"
          className="rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700"
        >
          {submitError}
        </div>
      )}

      {submitSuccess && (
        <div
          role="status"
          className="rounded-md border border-green-300 bg-green-50 px-3 py-2 text-sm text-green-700"
        >
          Profile updated successfully.
        </div>
      )}

      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium">
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          autoComplete="name"
          aria-invalid={errors.fullName ? "true" : "false"}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
          {...register("fullName")}
          className="mt-1 block w-full rounded-md border px-3 py-2 text-sm"
        />
        {errors.fullName && (
          <p id="fullName-error" role="alert" className="mt-1 text-sm text-red-600">
            {errors.fullName.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
          className="mt-1 block w-full rounded-md border px-3 py-2 text-sm"
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1 text-sm text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Theme */}
      <div>
        <label htmlFor="theme" className="block text-sm font-medium">
          Theme Preference
        </label>
        <select
          id="theme"
          aria-invalid={errors.theme ? "true" : "false"}
          aria-describedby={errors.theme ? "theme-error" : undefined}
          {...register("theme")}
          className="mt-1 block w-full rounded-md border px-3 py-2 text-sm"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </select>
        {errors.theme && (
          <p id="theme-error" role="alert" className="mt-1 text-sm text-red-600">
            {errors.theme.message}
          </p>
        )}
      </div>

      {/* Email notifications toggle */}
      <div className="flex items-center justify-between">
        <label htmlFor="emailNotifications" className="text-sm font-medium">
          Email Notifications
        </label>
        <input
          id="emailNotifications"
          type="checkbox"
          role="switch"
          aria-checked={undefined /* let native checkbox state drive this */}
          {...register("emailNotifications")}
          className="h-5 w-9"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
      >
        {isSubmitting ? "Saving..." : "Save Changes"}
      </button>
    </form>
  );
}

  return (
    <form className="p-6 bg-white rounded-lg shadow-md max-w-sm" onSubmit={handleSubmit(console.log)}>
      <div className="mb-4">
        <label htmlFor="fullName" className="block text-sm font-medium">Full Name</label>
        <input id="fullName" {...register("fullName")} aria-invalid={!!errors.fullName} className="w-full border p-2 rounded" />
        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium">Email</label>
        <input id="email" {...register("email")} aria-invalid={!!errors.email} className="w-full border p-2 rounded" />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Save Changes</button>
    </form>
  );
}