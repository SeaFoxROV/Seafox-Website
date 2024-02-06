"use client"
import React from 'react'
import Image from 'next/image'
import {Navbar as NavbarUI, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      Name: "Home",
      href: "#Home"
    },
    {
      Name: "About Us",
      href: "#About"
    },
    {
      Name: "Team",
      href: "#Team"
    },
    {
      Name: "Contact",
      href: "#Contact"
    },
 ];
  return (
    <NavbarUI onMenuOpenChange={setIsMenuOpen} className='fixed'>
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image
            src="/images/logo.png"
            width={100}
            height={100}
            alt="Seafox Logo"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
         {menuItems.map((item, index) => (
          <NavbarItem key={`${item.Name}-${index}`}>
            <Link color="foreground" href={item.href} >
              {item.Name}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Donate
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href={item.href}
              size="lg"
              color="foreground"
            >
              {item.Name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Link
              className="w-full"
              href="#"
              size="lg"
              color="primary"
            >
              Donate
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </NavbarUI>
  )
}
