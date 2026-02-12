import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface PageHeaderProps {
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHeader({
  title,
  description,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="sticky top-0 z-50 h-[calc(60px+env(safe-area-inset-top))] bg-gradient-to-b from-white from-0% via-white/95 via-80% to-transparent pt-[calc(16px+env(safe-area-inset-top))]">
          <div className="w-full max-w-[1440px] mx-auto px-[24px]">
            <div className="flex items-center gap-[10px] text-size-s">
              {breadcrumbs.map((item, index) => (
                <Fragment key={index}>
                  {index > 0 && (
                    <span className="text-[rgba(51,51,51,0.06)]">/</span>
                  )}
                  {item.to ? (
                    <Link
                      to={item.to}
                      className="text-neutral-900 hover:underline"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-neutral-900">{item.label}</span>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
