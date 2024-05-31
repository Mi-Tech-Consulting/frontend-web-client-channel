"use client"
import LandingPageView from './LandingPageView';


export default function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {

  return (
    <LandingPageView searchParams={searchParams}></LandingPageView>);
}
