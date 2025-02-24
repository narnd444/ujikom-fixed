"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import SidebarSettings from '@/app/components/navigations/settings-nav/sideset';
import PrivacyForm from '@/app/components/forms/settings/privacy';
import PreferenceForm from '@/app/components/forms/preference/preperence';
import ProfileForm from '@/app/components/forms/profile/profileForm';
import HelpForm from '@/app/components/forms/help/HelpForm';
const SettingPage = () => {
  const [activeForm, setActiveForm] = useState('profile');

  return (
    <section className="flex-col w-full h-screen space-y-8 p-6 bg-custom-slate font-Poppins">
      <div className="flex w-full items-center rounded-2xl p-5 bg-gradient-to-l from-blue-50 to-white justify-between space-x-5 text-slate-800 shadow-sm shadow-slate-700/20 sticky top-7">
        <h1 className="text-2xl text-slate-800">Settings</h1>
        <Link href="./home" className="flex items-center text-sm">
          <FaArrowLeft className="mr-3" />
          Kembali
        </Link>
      </div>
      <div className="menu-bar flex w-full h-full space-x-5 pb-10">
          <SidebarSettings onMenuSelect={setActiveForm} />
        <div className="flex w-full h-full justify-center rounded-2xl bg-accent bg-cover bg-bottom bg-no-repeat shadow-slate-700/30 p-10 shadow-sm ">
          {activeForm === 'profile' && <ProfileForm/>}
          {activeForm === 'privacy' && <PrivacyForm />}
          {activeForm === 'filters' && <h1 className='text-2xl text-slate-600'>Soon...</h1>}
          {activeForm === 'preferences' && <PreferenceForm/>}
          {activeForm === 'help' && <HelpForm/>}
        </div>
      </div>
    </section>
  );
};

export default SettingPage;
