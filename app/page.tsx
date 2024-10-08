import { Mail, UploadCloud, User } from "lucide-react";
import { InputControl, InputPrefix, InputRoot } from "./components/Input";
import { SettingTabs } from "./components/SettingsTabs";
import * as FileInput from "./components/Form/FileInput";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingTabs />
      <div className="mt-6 flex flex-col">
        <div className="flex justify-between items-center border-b border-zinc-200">
          <div className="space-y-9">
            <h2 className="text-xl font-semibold text-zinc-900">
              Personal Info
            </h2>
            <span className="text-sm text-zinc-500">
              Update your photos and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border-zinc-300 text-zinc-700 hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700"
              form="settings"
            >
              Save
            </button>
          </div>
        </div>
        <form
          id="settings"
          action=""
          className="mt-6 flex-col w-full gap-5 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid gap-3 grid-cols-form mb-5">
              <InputRoot>
                <InputControl defaultValue="José" id="firstName"></InputControl>
              </InputRoot>
              <InputRoot>
                <InputControl
                  defaultValue="Henrique"
                  id="lastname"
                ></InputControl>
              </InputRoot>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>
            <div className="grid grid-cols-form mb-5 gap-6">
              <InputRoot>
                <InputPrefix>
                  <Mail className="w-5 h-5 text-zinc-500" />
                </InputPrefix>
                <InputControl
                  defaultValue="mail@mail.com.br"
                  type="email"
                  id="email"
                ></InputControl>
              </InputRoot>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>
            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>

            <div className="flex items-start gap-5">
              <label htmlFor="photo"></label>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 mb-5">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700 mt-5"
            >
              Role
            </label>
            <div className="grid grid-cols-form mt-5 gap-6 border-zinc-50 p-2">
              <InputRoot>
                <InputControl defaultValue="CTO" id="role"></InputControl>
              </InputRoot>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 mb-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700 mt-5"
            >
              Country
            </label>
            <div className="grid grid-cols-form mt-5 gap-6">
              <InputRoot>
                <InputControl defaultValue="Brazil" id="country"></InputControl>
              </InputRoot>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 mb-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700 mt-5"
            >
              Timezone
            </label>
            <div className="grid grid-cols-form mt-5 gap-6">
              <InputRoot>
                <InputControl
                  defaultValue="Pacific Time Zone"
                  id="timezone"
                ></InputControl>
              </InputRoot>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5 ">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="text-sm font-normal text-zinc-500 block">
                Write a short introduction.
              </span>
            </label>
          </div>
          <div className="flex items-center justify-end gap-2 pt-5">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border-zinc-300 text-zinc-700 hover:bg-zinc-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700"
              >
                Save
              </button>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5 ">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Portfolio Projects
              <span className="text-sm font-normal text-zinc-500 block">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root className="flex items-start gap-5">
              <FileInput.Trigger />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>
        </form>
      </div>
    </>
  );
}
