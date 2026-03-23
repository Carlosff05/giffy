import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import useUser from '../../hooks/useUser'
import Login from '../../components/Login'

export default function LoginPage() {
  return (
    <>
      <h2>
        Login
      </h2>
      <Login/>
    </>
  )
}