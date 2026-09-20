import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import {
  Briefcase, GraduationCap, Heart, Building2,
  ArrowRight, MapPin, FileCheck, Send, Plane
} from "lucide-react";

import { useLanguage } from "../i18n/LanguageContext.jsx";
import Section from "../components/Section.jsx";
import ResponsiveGrid from "../components/ResponsiveGrid.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import MiniCard from "../components/MiniCard.jsx";
import VisaCard from "../components/VisaCard.jsx";
import BlogCard from "../components/BlogCard.jsx";
import FAQ from "../components/FAQ.jsx";
import { visas } from "../data/visas.jsx";
import { blogPosts } from "../data/blogPosts.jsx";
import { countries } from "../data/countries.jsx";

export default function Home() {
  const { t, lang } = useLanguage();

  // One highlight visa from each destination country
  const featuredVisas = countries
    .map((c) => visas.find((v) => v.country === c.id))
    .filter(Boolean);

  const featuredPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  const finder = [
    { icon: Briefcase, label: t("home.finderWork"), category: "skilled" },
    { icon: GraduationCap, label: t("home.finderStudy"), category: "student" },
    { icon: Heart, label: t("home.finderFamily"), category: "family" },
    { icon: Building2, label: t("home.finderBusiness"), category: "business" },
  ];

  const journeySteps = [
    ["01", t("home.step1")],
    ["02", t("home.step2")],
    ["03", t("home.step3")],
    ["04", t("home.step4")],
    ["05", t("home.step5")],
  ];

  return (
    <>
      <Box component="section" sx={{
        px: 2, py: { xs: 6, md: 8 }, position: "relative",
        overflow: "hidden", borderBottom: "1px solid", borderColor: "divider"
      }}>
        <Box sx={{
          position: "absolute", inset: 0,
          background: "radial-gradient(circle at top right, rgba(75,99,88,.12), transparent 40%), radial-gradient(circle at bottom left, rgba(197,168,108,.08), transparent 35%)"
        }} />
        <Box sx={{
          maxWidth: 1180, mx: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.55fr .95fr" },
          gap: 5, alignItems: "center", position: "relative", zIndex: 1
        }}>
          <Box>
            <Box sx={{
              display: "inline-flex", alignItems: "center", gap: 1,
              px: 2, py: .8, borderRadius: "999px",
              border: "1px solid", borderColor: "lineStrong.main",
              bgcolor: "background.paper", mb: 3
            }}>
              <MapPin size={15} />
              <Typography sx={{ color: "eucalyptus.dark", fontWeight: 600, fontSize: ".82rem" }}>
                {t("home.heroEyebrow")}
              </Typography>
            </Box>

            <Typography variant="h1" sx={{ fontSize: { xs: "2.3rem", md: "3.5rem" }, lineHeight: 1.05, mb: 3 }}>
              {t("home.heroTitle")}
            </Typography>

            <Typography sx={{ color: "text.secondary", maxWidth: "46ch", mb: 4, fontSize: "1.05rem" }}>
              {t("home.heroBody")}
            </Typography>

            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button component={Link} to="/contact" variant="contained" size="large" sx={{ borderRadius: "999px", px: 4 }}>
                {t("home.heroCta")}
              </Button>
              <Button component={Link} to="/visas" variant="outlined" size="large"
                sx={{ borderRadius: "999px", px: 4, borderColor: "lineStrong.main", color: "heading.main" }}>
                {t("home.heroSecondary")}
              </Button>
            </Box>

            <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap", mt: 4 }}>
              <Box>
                <Typography sx={{ fontSize: "1.8rem", fontWeight: 700, color: "brass.dark", lineHeight: 1.1 }}>
                  {countries.length}
                </Typography>
                <Typography sx={{ color: "text.secondary", fontSize: ".82rem" }}>
                  {t("home.statsCountries")}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "1.8rem", fontWeight: 700, color: "brass.dark", lineHeight: 1.1 }}>
                  {visas.length}+
                </Typography>
                <Typography sx={{ color: "text.secondary", fontSize: ".82rem" }}>
                  {t("home.statsVisas")}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{
            bgcolor: "background.paper",
            border: "1px solid", borderColor: "divider",
            borderRadius: "28px", p: 3,
            boxShadow: "0 20px 40px rgba(0,0,0,.12)",
            backdropFilter: "blur(18px)"
          }}>
            <Typography sx={{ fontWeight: 700, fontSize: "1.2rem", mb: 1 }}>
              {t("home.finderTitle")}
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 3 }}>
              {t("home.finderBody")}
            </Typography>

            <Box sx={{ display: "grid", gap: 1.5 }}>
              {finder.map(({ icon: Icon, label, category }) => (
                <Box key={label} component={Link} to={`/visas?category=${category}`} sx={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  p: 1.7, borderRadius: "16px",
                  border: "1px solid", borderColor: "divider",
                  bgcolor: "background.default",
                  textDecoration: "none", color: "text.primary",
                  transition: ".25s",
                  "&:hover": { transform: "translateY(-2px)", borderColor: "lineStrong.main", boxShadow: "0 8px 20px rgba(0,0,0,.08)" }
                }}>
                  <Box sx={{ display: "flex", gap: 1.2, alignItems: "center" }}>
                    <Box sx={{
                      width: 36, height: 36, borderRadius: "12px",
                      bgcolor: "rgba(75,99,88,.12)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "eucalyptus.dark"
                    }}>
                      <Icon size={18} />
                    </Box>
                    <Typography>{label}</Typography>
                  </Box>
                  <ArrowRight size={18} />
                </Box>
              ))}
            </Box>

            <Button component={Link} to="/contact" fullWidth variant="contained" sx={{ mt: 3, borderRadius: "16px" }}>
              {t("home.finderCta")}
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Destination countries */}
      <Section>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            mb: 4,
            flexWrap: "wrap",
            gap: 2
          }}
        >
          <SectionHeading
            title={t("home.countriesTitle")}
            body={t("home.countriesIntro")}
          />

          <Box
            component={Link}
            to="/destinations"
            sx={{
              color: "brass.dark",
              textDecoration: "none",
              fontWeight: 600
            }}
          >
            {t("home.countriesLink")}
          </Box>
        </Box>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gap: 3
        }}>
          {countries.map((country) => {
            const count = visas.filter(
              (v) => v.country === country.id
            ).length;

            return (
              <Box
                key={country.id}
                component={Link}
                to={`/visas?country=${country.id}`}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textDecoration: "none",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: "22px",
                  p: 3,
                  bgcolor: "background.paper",
                  boxShadow: "0 1px 2px rgba(27,42,40,0.04)",
                  transition: ".25s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow:
                      "0 14px 28px -14px rgba(27,42,40,0.22)",
                    borderColor: "lineStrong.main"
                  }
                }}
              >
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>

                    <Typography
                      variant="h3"
                      sx={{
                        color: "heading.main",
                        mb: 0
                      }}
                    >
                      {country.name[lang]}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      color: "text.secondary",
                      mb: 2,
                      fontSize: '0.88rem',
                      lineHeight: 1.6
                    }}
                  >
                    {country.blurb[lang]}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "brass.dark",
                    fontWeight: 700,
                    fontSize: ".82rem",
                    pt: 1,
                    borderTop: "1px solid",
                    borderColor: "divider"
                  }}
                >
                  {count} {t("destinations.visaCountLabel")}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Section>

      <Section muted>
        <SectionHeading title={t("home.whyTitle")} />
        <Box sx={{ mt: 4 }}>
          <ResponsiveGrid columns={4}>
            <MiniCard icon={FileCheck} title={t("home.whyDocTitle")} body={t("home.whyDocBody")} />
            <MiniCard icon={Send} title={t("home.whyLodgeTitle")} body={t("home.whyLodgeBody")} />
            <MiniCard icon={Plane} title={t("home.whyFollowTitle")} body={t("home.whyFollowBody")} />
            <MiniCard icon={MapPin} title={t("home.whyArrivalTitle")} body={t("home.whyArrivalBody")} />
          </ResponsiveGrid>
        </Box>
      </Section>

      <Section>
        <SectionHeading title={t("home.journeyTitle")} />
        <Box sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2,1fr)", lg: "repeat(5,1fr)" },
          gap: 3, mt: 4
        }}>
          {journeySteps.map(([n, title]) => (
            <Box key={n} sx={{
              p: 3, border: "1px solid", borderColor: "divider",
              borderRadius: "22px", bgcolor: "background.paper",
              transition: ".25s",
              "&:hover": { transform: "translateY(-4px)", boxShadow: "0 12px 28px rgba(0,0,0,.08)" }
            }}>
              <Typography sx={{ color: "brass.dark", fontWeight: 700, fontSize: "1.8rem", mb: 1 }}>{n}</Typography>
              <Typography sx={{ fontWeight: 600 }}>{title}</Typography>
            </Box>
          ))}
        </Box>
      </Section>

      <Section muted>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "end", mb: 4, flexWrap: "wrap", gap: 2 }}>
          <SectionHeading title={t("nav.visas")} />
          <Box component={Link} to="/visas" sx={{ color: "brass.dark", textDecoration: "none", fontWeight: 600 }}>
            {t("home.visasLink")}
          </Box>
        </Box>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gap: 3
        }}>
          {featuredVisas.map(v => <VisaCard key={v.id} visa={v} />)}
        </Box>
      </Section>

      <Section>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "end", mb: 4, flexWrap: "wrap", gap: 2 }}>
          <SectionHeading title={t("home.blogTitle")} />
          <Box component={Link} to="/blog" sx={{ color: "brass.dark", textDecoration: "none", fontWeight: 600 }}>
            {t("home.blogLink")}
          </Box>
        </Box>
        <ResponsiveGrid columns={3}>
          {featuredPosts.map(p => <BlogCard key={p.slug} post={p} />)}
        </ResponsiveGrid>
      </Section>

      <Section muted innerSx={{ maxWidth: 900 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "end", mb: 4, flexWrap: "wrap", gap: 2 }}>
          <SectionHeading title={t("home.faqTitle")} />
          <Box component={Link} to="/faq" sx={{ color: "brass.dark", textDecoration: "none", fontWeight: 600 }}>
            {t("home.faqLink")}
          </Box>
        </Box>
        <FAQ showTabs={false} country="all" limit={6} />
      </Section>

      <Box sx={{ bgcolor: "ink.main", color: "#eef1ec", py: { xs: 5, md: 6 }, px: 2 }}>
        <Box sx={{
          maxWidth: 1180, mx: "auto",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", gap: 3, flexWrap: "wrap"
        }}>
          <Box>
            <Typography variant="h2" sx={{ color: "#eef1ec", mb: .5 }}>
              {t("home.ctaTitle")}
            </Typography>
            <Typography sx={{ color: "#c9d1cb" }}>
              {t("home.ctaBody")}
            </Typography>
          </Box>

          <Button component={Link} to="/contact" variant="contained" size="large"
            sx={{
              bgcolor: "#efede6", color: "#1b2a28",
              borderRadius: "999px", px: 4,
              "&:hover": { bgcolor: "brass.main", color: "#1b2a28" }
            }}>
            {t("home.ctaButton")}
          </Button>
        </Box>
      </Box>
    </>
  );
}
