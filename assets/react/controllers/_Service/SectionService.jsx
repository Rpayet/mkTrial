export function toggleSection(currentSection, sectionName) {
    return {
      ...Object.keys(currentSection).reduce((acc, key) => {
        acc[key] = key === sectionName ? !currentSection[key] : false;
        return acc;
      }, {})
    };
  };