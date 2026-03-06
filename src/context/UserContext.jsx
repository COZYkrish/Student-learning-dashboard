import { createContext, useMemo, useState, useEffect } from "react"

export const UserContext = createContext()

const defaultProfile = {
  name: "Krish",
  role: "Student",
  weeklyTargetHours: 10,
  preferredCategory: "Development",
}

const profileStorageKey = "learntrack-profile"

export function UserProvider({ children }) {
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem(profileStorageKey)
    return saved ? JSON.parse(saved) : defaultProfile
  })

  useEffect(() => {
    localStorage.setItem(profileStorageKey, JSON.stringify(profile))
  }, [profile])

  const value = useMemo(
    () => ({
      profile,
      updateProfile: (patch) => setProfile((prev) => ({ ...prev, ...patch })),
    }),
    [profile]
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
