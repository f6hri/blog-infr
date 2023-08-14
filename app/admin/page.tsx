"use client";

import Navbar from "@/components/admin/navbar";
import Button from "@/components/admin/shared/button";
import { Dropdown, DropdownItem } from "@/components/admin/shared/dropdown";
import Sidebar from "@/components/admin/sidebar";
import { useState } from "react";

export default function Index() {
  const [loading, isLoading] = useState(false);
  return (
    <div className="container-scroller">
      <Navbar />
      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        <div className="main-panel">
          <div className="content-wrapper">
            <Button
              isLoading={loading}
              onClick={() => {
                isLoading(true);
              }}
              leftIconClass="reload"
              title="hello"
              colorScheme="warning"
            />
            <Dropdown id="menu" title="title">
              <DropdownItem href="/" title="hello" />
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}
