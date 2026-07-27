import type { ProfileFormValues } from "@/lib/schemas/profile-schema";

export interface UpdateProfileResponse {
  success: boolean;
  message?: string;
}

export type SubmitProfile = (
  values: ProfileFormValues
) => Promise<UpdateProfileResponse>;