import { createPopper } from "@popperjs/core";
import type { Directive } from "vue";

export const tooltip: Directive = {
  mounted(el, binding) {
    const tooltip = document.createElement('div');
    tooltip.style.display = 'none';
    tooltip.textContent = binding.value;
    document.body.appendChild(tooltip);

    // Apply Popper.js
    const popperInstance = createPopper(el, tooltip, {
      placement: 'top',
      modifiers: [
        { name: 'offset', options: { offset: [0, 8] } },
      ],
    });

    // Show/Hide tooltip
    const showTooltip = () => {
      tooltip.style.display = 'block';
      popperInstance.update();
    };
    const hideTooltip = () => {
      tooltip.style.display = 'none';
    };

    el.addEventListener('mouseenter', showTooltip);
    el.addEventListener('mouseleave', hideTooltip);

    // Save instances for cleanup
    el._tooltip = { tooltip, popperInstance, showTooltip, hideTooltip };
  },
  unmounted(el) {
    const { tooltip, popperInstance, showTooltip, hideTooltip } = el._tooltip;
    el.removeEventListener('mouseenter', showTooltip);
    el.removeEventListener('mouseleave', hideTooltip);
    popperInstance.destroy();
    document.body.removeChild(tooltip);
  },
}