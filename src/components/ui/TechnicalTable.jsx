import React from 'react';
import { useRTL } from '../../hooks/useRTL.js';

export default function TechnicalTable({ 
  caption, 
  columns, 
  data, 
  highlightRows = [], 
  highlightCols = [],
  sortable = false,
  lang 
}) {
  const { isRTL, dirClass } = useRTL();
  const [sortConfig, setSortConfig] = React.useState({ key: null, direction: 'asc' });

  const handleSort = (key) => {
    if (!sortable) return;
    
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = React.useMemo(() => {
    if (!sortable || !sortConfig.key) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortable, sortConfig]);

  const getSortIcon = (key) => {
    if (!sortable) return null;
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  return (
    <div className={`overflow-x-auto rounded-2xl border border-gray-200 my-6 ${dirClass}`}>
      <table className="w-full text-sm">
        {caption && (
          <caption className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 block">
            {caption}
          </caption>
        )}
        <thead>
          <tr className="bg-[#374151] text-white">
            {columns.map((col, index) => (
              <th
                key={index}
                onClick={() => handleSort(col.key)}
                className={`px-4 py-3 text-left font-bold uppercase tracking-wider text-xs ${
                  sortable ? 'cursor-pointer hover:bg-[#4a5568] transition-colors' : ''
                } ${isRTL ? 'text-right' : 'text-left'}`}
                style={{
                  backgroundColor: highlightCols.includes(col.key) ? '#D4AF37' : undefined,
                }}
              >
                <div className="flex items-center gap-2">
                  <span>{col.label}</span>
                  {getSortIcon(col.key)}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`border-b border-gray-100 hover:bg-[#F8F9FA] transition-colors ${
                highlightRows.includes(rowIndex) ? 'bg-[#D4AF37]/10' : ''
              } ${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}
            >
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className={`px-4 py-3 text-gray-700 ${
                    highlightCols.includes(col.key) ? 'font-bold text-[#374151]' : ''
                  } ${isRTL ? 'text-right' : 'text-left'}`}
                >
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Comparison Table Component
 * For side-by-side product or technology comparisons
 */
export function ComparisonTable({ 
  items, 
  features, 
  highlightBest = true,
  lang 
}) {
  const { isRTL, dirClass } = useRTL();

  const getBestValue = (featureKey) => {
    if (!highlightBest) return null;
    
    const values = items.map(item => item[featureKey]);
    
    // For numeric values, find the best
    const numericValues = values.filter(v => typeof v === 'number');
    if (numericValues.length > 0) {
      const max = Math.max(...numericValues);
      const min = Math.min(...numericValues);
      // Determine if higher or lower is better based on context
      const isHigherBetter = featureKey.includes('temperature') || 
                           featureKey.includes('rating') || 
                           featureKey.includes('life');
      const bestValue = isHigherBetter ? max : min;
      return items.findIndex(item => item[featureKey] === bestValue);
    }
    
    return null;
  };

  return (
    <div className={`overflow-x-auto rounded-2xl border border-gray-200 my-6 ${dirClass}`}>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#374151] text-white">
            <th className="px-4 py-3 text-left font-bold uppercase tracking-wider text-xs bg-[#D4AF37]">
              {lang === 'fa' ? 'ویژگی' : 'Feature'}
            </th>
            {items.map((item, index) => (
              <th
                key={index}
                className={`px-4 py-3 text-left font-bold uppercase tracking-wider text-xs ${isRTL ? 'text-right' : 'text-left'}`}
              >
                {item.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, rowIndex) => {
            const bestIndex = getBestValue(feature.key);
            
            return (
              <tr
                key={rowIndex}
                className={`border-b border-gray-100 hover:bg-[#F8F9FA] transition-colors ${
                  rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                }`}
              >
                <td className="px-4 py-3 font-medium text-[#374151]">
                  {feature.label}
                </td>
                {items.map((item, colIndex) => (
                  <td
                    key={colIndex}
                    className={`px-4 py-3 text-gray-700 ${
                      bestIndex === colIndex ? 'bg-[#D4AF37]/10 font-bold text-[#374151]' : ''
                    } ${isRTL ? 'text-right' : 'text-left'}`}
                  >
                    {feature.render ? feature.render(item[feature.key], item) : item[feature.key]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Specification Table Component
 * For technical specifications and standards
 */
export function SpecificationTable({ 
  specifications, 
  title,
  lang 
}) {
  const { isRTL, dirClass } = useRTL();

  return (
    <div className={`my-6 ${dirClass}`}>
      {title && (
        <h3 className={`text-lg font-black text-[#374151] mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
          {title}
        </h3>
      )}
      <div className="border border-gray-200 rounded-2xl overflow-hidden">
        {specifications.map((spec, index) => (
          <div
            key={index}
            className={`flex flex-col sm:flex-row border-b border-gray-100 last:border-b-0 ${
              index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
            }`}
          >
            <div className={`px-4 py-3 font-bold text-[#374151] text-xs uppercase tracking-wider bg-[#374151]/5 sm:w-1/3 ${isRTL ? 'text-right' : 'text-left'}`}>
              {spec.label}
            </div>
            <div className={`px-4 py-3 text-gray-700 sm:w-2/3 ${isRTL ? 'text-right' : 'text-left'}`}>
              {spec.render ? spec.render(spec.value) : spec.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Ampacity Chart Table Component
 * For cable ampacity and current-carrying capacity tables
 */
export function AmpacityChart({ 
  data, 
  title, 
  conductorMaterial,
  installationMethod,
  lang 
}) {
  const { isRTL, dirClass } = useRTL();

  const columns = [
    { key: 'size', label: lang === 'fa' ? 'اندازه (mm²)' : 'Size (mm²)' },
    { key: 'current', label: lang === 'fa' ? 'جریان (A)' : 'Current (A)' },
    { key: 'voltageDrop', label: lang === 'fa' ? 'افت ولتاژ (V/A.km)' : 'Voltage Drop (V/A.km)' },
    { key: 'resistance', label: lang === 'fa' ? 'مقاومت (Ω/km)' : 'Resistance (Ω/km)' },
  ];

  return (
    <div className={`my-6 ${dirClass}`}>
      <div className="mb-4">
        <h3 className={`text-lg font-black text-[#374151] mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
          {title}
        </h3>
        {conductorMaterial && (
          <p className={`text-sm text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
            {lang === 'fa' ? 'هادی: ' : 'Conductor: '}{conductorMaterial}
          </p>
        )}
        {installationMethod && (
          <p className={`text-sm text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
            {lang === 'fa' ? 'روش نصب: ' : 'Installation: '}{installationMethod}
          </p>
        )}
      </div>
      <TechnicalTable
        columns={columns}
        data={data}
        highlightRows={[0, 1, 2]}
        lang={lang}
      />
    </div>
  );
}
