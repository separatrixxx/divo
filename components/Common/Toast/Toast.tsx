import toast from 'react-hot-toast';

export const ToastSuccess = (message: string | undefined): void => {
    if (message) {
        toast.error(message, {
            icon: '🔥',
            style: {
                background: 'var(--dark)',
                borderRadius: '10px',
                color: 'var(--white)',
            },
        });
    }
};

export const ToastError = (message: string | undefined): void => {
    if (message) {
        toast.error(message, {
            icon: '😔',
            style: {
                background: 'var(--dark)',
                borderRadius: '10px',
                color: 'var(--error)',
            },
        });
    }
};